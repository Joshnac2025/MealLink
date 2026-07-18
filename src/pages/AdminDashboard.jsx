import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
    const [stats, setStats] = useState(null);
    const [pendingEvents, setPendingEvents] = useState([]);
    const [users, setUsers] = useState([]);
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('overview'); // overview, users, donations
    const navigate = useNavigate();

    useEffect(() => {
        const userType = localStorage.getItem('user_type');
        if (userType !== 'admin') {
            navigate('/login');
            return;
        }
        fetchData();
    }, [navigate]);

    const fetchData = async () => {
        try {
            // Fetch stats
            const statsRes = await api.get('/admin/admin/overview');
            console.log('Admin stats:', statsRes.data);
            setStats(statsRes.data);

            // Fetch pending events
            const eventsRes = await api.get('/events/admin/pending_event_donations');
            setPendingEvents(eventsRes.data);

            // Get users directly from localStorage
            const allUsers = JSON.parse(localStorage.getItem('meallink_users') || '[]');
            console.log('All registered users:', allUsers);
            setUsers(allUsers);

            // Get donations directly from localStorage
            const allDonations = JSON.parse(localStorage.getItem('meallink_donations') || '[]');
            console.log('All donations:', allDonations);
            setDonations(allDonations);

        } catch (err) {
            console.error('Error fetching data:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleEventAction = async (eventId, status) => {
        try {
            await api.put(`/events/admin/event_donations/${eventId}`, { approval_status: status });
            fetchData(); // Refresh
        } catch (err) {
            console.error('Failed to update event status');
        }
    };

    if (loading) return <div className="container mt-4">Loading...</div>;

    return (
        <div className="container">
            <h2 className="mb-4" style={{ color: 'var(--primary-dark)' }}>Admin Dashboard</h2>

            {/* Tab Navigation */}
            <div className="flex gap-4 mb-4" style={{ borderBottom: '2px solid #eee' }}>
                {['overview', 'users', 'donations'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            padding: '10px 20px',
                            border: 'none',
                            background: 'none',
                            borderBottom: activeTab === tab ? '3px solid var(--primary-color)' : 'none',
                            color: activeTab === tab ? 'var(--primary-color)' : 'var(--text-secondary)',
                            fontWeight: activeTab === tab ? '600' : '400',
                            textTransform: 'capitalize',
                            cursor: 'pointer'
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
                <>
                    {/* Stats Cards */}
                    {stats && (
                        <div className="flex gap-4 mb-4" style={{ flexWrap: 'wrap' }}>
                            <div className="card" style={{ flex: 1, minWidth: '200px', background: 'linear-gradient(135deg, #66BB6A 0%, #43A047 100%)', color: 'white' }}>
                                <h3>{stats.total_donors}</h3>
                                <p>Total Donors</p>
                            </div>
                            <div className="card" style={{ flex: 1, minWidth: '200px', background: 'linear-gradient(135deg, #42A5F5 0%, #1E88E5 100%)', color: 'white' }}>
                                <h3>{stats.total_orphanages}</h3>
                                <p>Registered Orphanages</p>
                            </div>
                            <div className="card" style={{ flex: 1, minWidth: '200px', background: 'linear-gradient(135deg, #FFA726 0%, #FB8C00 100%)', color: 'white' }}>
                                <h3>{stats.donations_summary?.Pending || 0}</h3>
                                <p>Pending Donations</p>
                            </div>
                            <div className="card" style={{ flex: 1, minWidth: '200px', background: 'linear-gradient(135deg, #AB47BC 0%, #8E24AA 100%)', color: 'white' }}>
                                <h3>{stats.donations_summary?.Accepted || 0}</h3>
                                <p>Accepted Donations</p>
                            </div>
                        </div>
                    )}

                    <h3 className="mb-4 mt-4">Pending Event Approvals</h3>

                    {pendingEvents.length === 0 ? (
                        <div className="card p-4 text-center">
                            <p style={{ color: 'var(--text-secondary)' }}>No pending events to review.</p>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gap: '20px' }}>
                            {pendingEvents.map((event) => (
                                <div key={event.id} className="card flex justify-between items-center animate-fade-in">
                                    <div>
                                        <h4>{event.event_name}</h4>
                                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                            Date: {event.event_date} | Time: {event.event_time}
                                        </p>
                                        <p className="mt-2">{event.description}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <button
                                            className="btn"
                                            style={{ backgroundColor: '#FFEBEE', color: '#D32F2F' }}
                                            onClick={() => handleEventAction(event.id, 'Rejected')}
                                        >
                                            Reject
                                        </button>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleEventAction(event.id, 'Approved')}
                                        >
                                            Approve
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
                <div>
                    <h3 className="mb-4">Registered Users ({users.length})</h3>
                    {users.length === 0 ? (
                        <div className="card p-4 text-center">
                            <p style={{ color: 'var(--text-secondary)' }}>No users registered yet.</p>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gap: '15px' }}>
                            {users.map((user) => (
                                <div key={user.id} className="card animate-fade-in">
                                    <div className="flex justify-between items-start">
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{ marginBottom: '5px' }}>{user.name || user.username}</h4>
                                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                                {user.email || 'No email'}
                                            </p>
                                            <p style={{ fontSize: '0.9rem', marginTop: '5px' }}>
                                                📞 {user.phone || 'N/A'}
                                            </p>
                                            {user.address && (
                                                <p style={{ fontSize: '0.9rem', marginTop: '5px' }}>
                                                    📍 {user.address}
                                                </p>
                                            )}
                                            {user.aadhar_number && (
                                                <p style={{ fontSize: '0.9rem', marginTop: '5px' }}>
                                                    🆔 {user.aadhar_number}
                                                </p>
                                            )}
                                        </div>
                                        <span style={{
                                            padding: '5px 15px',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            backgroundColor: user.role === 'donor' ? '#E8F5E9' : user.role === 'orphanage' ? '#E3F2FD' : '#FFF3E0',
                                            color: user.role === 'donor' ? '#2E7D32' : user.role === 'orphanage' ? '#1565C0' : '#E65100'
                                        }}>
                                            {user.role}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Donations Tab */}
            {activeTab === 'donations' && (
                <div>
                    <h3 className="mb-4">All Donations ({donations.length})</h3>
                    {donations.length === 0 ? (
                        <div className="card p-4 text-center">
                            <p style={{ color: 'var(--text-secondary)' }}>No donations yet.</p>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gap: '15px' }}>
                            {donations.map((donation) => (
                                <div key={donation.id} className="card animate-fade-in">
                                    <div className="flex justify-between items-start">
                                        <div style={{ flex: 1 }}>
                                            <div className="flex gap-2 items-center mb-2">
                                                <span style={{
                                                    padding: '4px 12px',
                                                    borderRadius: '15px',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '600',
                                                    backgroundColor: '#E3F2FD',
                                                    color: '#1565C0'
                                                }}>
                                                    {donation.donation_type}
                                                </span>
                                                <span style={{
                                                    padding: '4px 12px',
                                                    borderRadius: '15px',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '600',
                                                    backgroundColor: donation.status === 'Pending' ? '#FFF3E0' : '#E8F5E9',
                                                    color: donation.status === 'Pending' ? '#E65100' : '#2E7D32'
                                                }}>
                                                    {donation.status}
                                                </span>
                                            </div>
                                            <h4 style={{ marginBottom: '5px' }}>{donation.quantity}</h4>
                                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                                {donation.description}
                                            </p>
                                            <p style={{ fontSize: '0.9rem', marginTop: '5px' }}>
                                                📍 {donation.location}
                                            </p>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '5px' }}>
                                                From: {donation.email}
                                            </p>
                                            {donation.date && (
                                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                                    Date: {donation.date}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
