import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function OrphanageDashboard() {
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const userType = localStorage.getItem('user_type');
        if (userType !== 'orphanage') {
            navigate('/login');
            return;
        }
        fetchDonations();
    }, [navigate]);

    const fetchDonations = async () => {
        try {
            const response = await api.get('/orphanages/orphanage/view_donations');
            if (response.data.donations) {
                setDonations(response.data.donations);
            } else {
                setDonations([]);
            }
        } catch (err) {
            console.error(err);
            // If 404 or empty, it might just mean no donations
        } finally {
            setLoading(false);
        }
    };

    const handleAccept = async (donationId) => {
        const email = localStorage.getItem('user_email');
        if (!email) return;

        try {
            const response = await api.post('/orphanages/orphanage/accept_donation', {
                donation_id: donationId,
                orphanage_email: email
            });

            if (response.status === 200) {
                setSuccessMsg('Donation accepted successfully! 🎉');
                fetchDonations(); // Refresh list
                setTimeout(() => setSuccessMsg(''), 3000);
            }
        } catch (err) {
            setError('Failed to accept donation.');
            setTimeout(() => setError(''), 3000);
        }
    };

    return (
        <div className="container">
            <div className="flex justify-between items-center mb-4">
                <h2 style={{ color: 'var(--primary-dark)' }}>Orphanage Dashboard</h2>
                <div style={{ color: 'var(--text-secondary)' }}>
                    Logged in as: {localStorage.getItem('user_email')}
                </div>
            </div>

            {successMsg && <div className="mb-4 p-2 rounded bg-green-100 text-green-700" style={{ backgroundColor: '#E8F5E9', color: 'var(--success-color)' }}>{successMsg}</div>}
            {error && <div className="mb-4 p-2 rounded bg-red-100 text-red-700" style={{ backgroundColor: '#FFEBEE', color: 'var(--error-color)' }}>{error}</div>}

            <h3 className="mb-4">Available Donations</h3>

            {loading ? (
                <p>Loading donations...</p>
            ) : donations.length === 0 ? (
                <div className="card text-center p-4">
                    <p style={{ color: 'var(--text-secondary)' }}>No pending donations available at the moment.</p>
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                    {donations.map((donation) => (
                        <div key={donation.id} className="card animate-fade-in">
                            <div className="flex justify-between items-center mb-2">
                                <span style={{
                                    backgroundColor: '#E3F2FD',
                                    color: '#1565C0',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600'
                                }}>
                                    {donation.donation_type}
                                </span>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                    {donation.location}
                                </span>
                            </div>

                            <h4 className="mb-2">{donation.quantity}</h4>
                            <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>{donation.description}</p>
                            {donation.quality_info && (
                                <p className="mb-4" style={{ fontSize: '0.9rem', color: '#558B2F' }}>
                                    ✅ {donation.quality_info}
                                </p>
                            )}

                            <button
                                className="btn btn-primary"
                                style={{ width: '100%' }}
                                onClick={() => handleAccept(donation.id)}
                            >
                                Accept Donation
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
