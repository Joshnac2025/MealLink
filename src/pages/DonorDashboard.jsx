import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function DonorDashboard() {
  const [donationType, setDonationType] = useState('Food');
  const [formData, setFormData] = useState({
    quantity: '',
    description: '',
    quality_info: '',
    location: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userType = localStorage.getItem('user_type');
    if (userType !== 'donor') {
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const email = localStorage.getItem('user_email');
    if (!email) {
      setMessage('Error: User email not found. Please login again.');
      return;
    }

    try {
      const payload = {
        email: email,
        donation_type: donationType,
        ...formData
      };

      const response = await api.post('/donors/donor/add_donation', payload);

      if (response.status === 201) {
        setMessage('Donation submitted successfully! Thank you for your kindness. 💚');
        setFormData({ quantity: '', description: '', quality_info: '', location: '' });
      }
    } catch (err) {
      setMessage(err.response?.data?.error || 'Failed to submit donation. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-4">
        <h2 style={{ color: 'var(--primary-dark)' }}>Donor Dashboard</h2>
        <div style={{ color: 'var(--text-secondary)' }}>
          Welcome, {localStorage.getItem('user_email')}
        </div>
      </div>

      <div className="flex gap-4 mb-4">
        <div className="card" style={{ flex: 1, cursor: 'pointer', border: donationType === 'Food' ? '2px solid var(--primary-color)' : 'none' }} onClick={() => setDonationType('Food')}>
          <h3 className="text-center">🍲 Food</h3>
          <p className="text-center text-sm text-secondary">Donate cooked or raw food</p>
        </div>
        <div className="card" style={{ flex: 1, cursor: 'pointer', border: donationType === 'Money' ? '2px solid var(--primary-color)' : 'none' }} onClick={() => setDonationType('Money')}>
          <h3 className="text-center">💰 Money</h3>
          <p className="text-center text-sm text-secondary">Support financially</p>
        </div>
        <div className="card" style={{ flex: 1, cursor: 'pointer', border: donationType === 'Other Materials' ? '2px solid var(--primary-color)' : 'none' }} onClick={() => setDonationType('Other Materials')}>
          <h3 className="text-center">📦 Materials</h3>
          <p className="text-center text-sm text-secondary">Clothes, books, etc.</p>
        </div>
      </div>

      <div className="card animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h3 className="mb-4">Make a Donation ({donationType})</h3>

        {message && <div className={`mb-4 p-2 rounded ${message.includes('Error') || message.includes('Failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`} style={{ backgroundColor: message.includes('Error') ? '#FFEBEE' : '#E8F5E9', color: message.includes('Error') ? 'var(--error-color)' : 'var(--success-color)' }}>{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Quantity / Amount</label>
            <input
              type="text"
              name="quantity"
              className="form-input"
              placeholder={donationType === 'Money' ? 'Amount in INR' : 'e.g., 50 meals, 10kg rice'}
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-textarea"
              placeholder="Describe the items..."
              value={formData.description}
              onChange={handleChange}
              rows="2"
            />
          </div>

          {donationType === 'Food' && (
            <div className="form-group">
              <label className="form-label">Quality Info / Expiry</label>
              <input
                type="text"
                name="quality_info"
                className="form-input"
                placeholder="e.g., Freshly cooked at 10 AM"
                value={formData.quality_info}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Pickup Location</label>
            <input
              type="text"
              name="location"
              className="form-input"
              placeholder="Enter full address"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Submit Donation
          </button>
        </form>
      </div>
    </div>
  );
}