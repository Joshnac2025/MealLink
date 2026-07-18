import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../services/api';

export default function Register() {
    const location = useLocation();
    const [userType, setUserType] = useState(location.state?.userType || 'donor');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        address: '',
        aadhar_number: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        try {
            let endpoint = '';
            let payload = {};

            if (userType === 'donor') {
                endpoint = '/donors/donor/register';
                payload = {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    password: formData.password,
                    aadhar_number: formData.aadhar_number
                };
            } else {
                endpoint = '/orphanages/orphanage/register';
                payload = {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    password: formData.password,
                    address: formData.address
                };
            }

            console.log('Registration payload:', payload);
            console.log('Endpoint:', endpoint);

            const response = await api.post(endpoint, payload);

            if (response.status === 201) {
                setSuccess(response.data.message || 'Registration successful!');
                setTimeout(() => {
                    navigate('/login', { state: { userType } });
                }, 2000);
            }
        } catch (err) {
            console.error('Registration error:', err);
            console.error('Error response:', err.response?.data);
            setError(err.response?.data?.error || 'Registration failed. Please try again.');
        }
    };

    return (
        <div className="container" style={{ maxWidth: '500px', marginTop: '40px' }}>
            <div className="card animate-fade-in">
                <h2 className="text-center mb-4" style={{ color: 'var(--primary-color)' }}>Create Account</h2>

                <div className="flex mb-4" style={{ borderBottom: '1px solid #eee' }}>
                    {['donor', 'orphanage'].map((type) => (
                        <button
                            key={type}
                            onClick={() => { setUserType(type); setError(''); setSuccess(''); }}
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
                {success && <div style={{ color: 'var(--success-color)', marginBottom: '1rem', textAlign: 'center' }}>{success}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" name="name" className="form-input" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Phone</label>
                        <input type="tel" name="phone" className="form-input" value={formData.phone} onChange={handleChange} required />
                    </div>

                    {userType === 'donor' && (
                        <div className="form-group">
                            <label className="form-label">Aadhar Number</label>
                            <input type="text" name="aadhar_number" className="form-input" value={formData.aadhar_number} onChange={handleChange} required />
                        </div>
                    )}

                    {userType === 'orphanage' && (
                        <div className="form-group">
                            <label className="form-label">Address</label>
                            <textarea name="address" className="form-textarea" value={formData.address} onChange={handleChange} required rows="3" />
                        </div>
                    )}

                    <div className="flex gap-4">
                        <div className="form-group" style={{ flex: 1 }}>
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-input" value={formData.password} onChange={handleChange} required />
                        </div>
                        <div className="form-group" style={{ flex: 1 }}>
                            <label className="form-label">Confirm Password</label>
                            <input type="password" name="confirmPassword" className="form-input" value={formData.confirmPassword} onChange={handleChange} required />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                        Register as {userType.charAt(0).toUpperCase() + userType.slice(1)}
                    </button>
                </form>

                <div className="text-center mt-4">
                    <span style={{ color: 'var(--text-secondary)' }}>Already have an account? </span>
                    <span style={{ color: 'var(--primary-color)', cursor: 'pointer', fontWeight: '600' }} onClick={() => navigate('/login', { state: { userType } })}>
                        Login here
                    </span>
                </div>
            </div>
        </div>
    );
}
