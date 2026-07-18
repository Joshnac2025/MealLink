import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Login() {
    const [userType, setUserType] = useState('donor'); // donor, orphanage, admin
    const [formData, setFormData] = useState({ email: '', password: '', username: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            let endpoint = '';
            let payload = {};

            if (userType === 'donor') {
                endpoint = '/donors/donor/login';
                payload = { email: formData.email, password: formData.password };
            } else if (userType === 'orphanage') {
                endpoint = '/orphanages/orphanage/login';
                payload = { email: formData.email, password: formData.password };
            } else if (userType === 'admin') {
                endpoint = '/admin/admin/login';
                payload = { username: formData.username, password: formData.password };
            }

            console.log('Attempting login:', { endpoint, payload: { ...payload, password: '***' } });
            const response = await api.post(endpoint, payload);
            console.log('Login response:', response);

            if (response.status === 200) {
                localStorage.setItem('user_type', userType);
                if (userType === 'orphanage' || userType === 'donor') {
                    localStorage.setItem('user_email', formData.email);
                }
                if (userType === 'admin') {
                    localStorage.setItem('user_username', formData.username);
                }

                console.log('Login successful, navigating to:', `/${userType}`);
                navigate(`/${userType}`);
            }
        } catch (err) {
            console.error('Login error:', err);
            setError(err.response?.data?.error || 'Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="container" style={{ maxWidth: '400px', marginTop: '40px' }}>
            <div className="card animate-fade-in">
                <h2 className="text-center mb-4" style={{ color: 'var(--primary-color)' }}>Welcome Back</h2>

                <div className="flex mb-4" style={{ borderBottom: '1px solid #eee' }}>
                    {['donor', 'orphanage', 'admin'].map((type) => (
                        <button
                            key={type}
                            onClick={() => { setUserType(type); setError(''); setFormData({ email: '', password: '', username: '' }); }}
                            style={{
                                flex: 1,
                                padding: '10px',
                                border: 'none',
                                background: 'none',
                                borderBottom: userType === type ? '2px solid var(--primary-color)' : 'none',
                                color: userType === type ? 'var(--primary-color)' : 'var(--text-secondary)',
                                fontWeight: userType === type ? '600' : '400',
                                textTransform: 'capitalize'
                            }}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {error && <div style={{ color: 'var(--error-color)', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    {userType === 'admin' ? (
                        <div className="form-group">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                name="username"
                                className="form-input"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    ) : (
                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-input"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                        Login as {userType.charAt(0).toUpperCase() + userType.slice(1)}
                    </button>
                </form>

                <div className="text-center mt-4">
                    <span style={{ color: 'var(--text-secondary)' }}>New here? </span>
                    <span
                        style={{ color: 'var(--primary-color)', cursor: 'pointer', fontWeight: '600' }}
                        onClick={() => navigate('/register', { state: { userType } })}
                    >
                        Create an account
                    </span>
                </div>
            </div>
        </div>
    );
}
