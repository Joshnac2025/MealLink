import React, { useState, useEffect } from 'react';
import api from '../services/api';

export default function EventDashboard() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    donor_name: '',
    donor_email: '',
    orphanage_name: '',
    event_date: '',
    meal_type: 'Lunch',
    message: '',
    terms_agreed: false
  });
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('view'); // view, create

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await api.get('/events/event_donations');
      // Filter only approved events for public view
      const approvedEvents = response.data.filter(e => e.status === 'Approved');
      setEvents(approvedEvents);
    } catch (err) {
      console.error('Failed to fetch events');
    }
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await api.post('/events/event_donation', formData);
      if (response.status === 201) {
        setMessage('Event sponsorship request submitted! Waiting for approval. 🎉');
        setFormData({
          donor_name: '',
          donor_email: '',
          orphanage_name: '',
          event_date: '',
          meal_type: 'Lunch',
          message: '',
          terms_agreed: false
        });
      }
    } catch (err) {
      setMessage(err.response?.data?.error || 'Failed to submit request.');
    }
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-4">
        <h2 style={{ color: 'var(--primary-dark)' }}>Community Events</h2>
        <button
          className="btn btn-primary"
          onClick={() => setActiveTab(activeTab === 'view' ? 'create' : 'view')}
        >
          {activeTab === 'view' ? '+ Sponsor an Event' : 'View Events'}
        </button>
      </div>

      {activeTab === 'create' ? (
        <div className="card animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 className="mb-4 text-center">Sponsor a Meal / Event</h3>
          {message && <div className={`mb-4 p-2 rounded ${message.includes('Failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`} style={{ backgroundColor: message.includes('Failed') ? '#FFEBEE' : '#E8F5E9', color: message.includes('Failed') ? 'var(--error-color)' : 'var(--success-color)' }}>{message}</div>}

          <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Your Name</label>
                <input type="text" name="donor_name" className="form-input" value={formData.donor_name} onChange={handleChange} required />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Email</label>
                <input type="email" name="donor_email" className="form-input" value={formData.donor_email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Orphanage Name</label>
              <input type="text" name="orphanage_name" className="form-input" placeholder="Enter exact name of orphanage" value={formData.orphanage_name} onChange={handleChange} required />
            </div>

            <div className="flex gap-4">
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Event Date</label>
                <input type="date" name="event_date" className="form-input" value={formData.event_date} onChange={handleChange} required />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Meal Type</label>
                <select name="meal_type" className="form-select" value={formData.meal_type} onChange={handleChange}>
                  <option>Breakfast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                  <option>Full Day</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Message / Occasion</label>
              <textarea name="message" className="form-textarea" placeholder="e.g., Birthday Celebration" value={formData.message} onChange={handleChange} rows="2" />
            </div>

            <div className="form-group flex items-center gap-4">
              <input type="checkbox" name="terms_agreed" id="terms" checked={formData.terms_agreed} onChange={handleChange} required />
              <label htmlFor="terms" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                I agree to allow photos of the event to be shared.
              </label>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Request</button>
          </form>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {events.length === 0 ? (
            <p className="text-center col-span-full" style={{ color: 'var(--text-secondary)' }}>No upcoming events scheduled yet.</p>
          ) : (
            events.map(event => (
              <div key={event.id} className="card animate-fade-in">
                <div className="flex justify-between items-center mb-2">
                  <span style={{ fontWeight: '600', color: 'var(--primary-color)' }}>{event.event_name}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{event.event_date}</span>
                </div>
                <p className="mb-2" style={{ fontSize: '0.9rem' }}>{event.description}</p>
                <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between items-center">
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Sponsored by Donor #{event.donor_id || 'Anonymous'}</span>
                  {event.photo_permission && <span title="Photos allowed">📸</span>}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}