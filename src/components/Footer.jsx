import React from 'react';

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: 'var(--surface-color)',
            padding: '40px 0',
            marginTop: 'auto',
            borderTop: '1px solid #eee'
        }}>
            <div className="container">
                <div className="flex justify-between" style={{ flexWrap: 'wrap', gap: '20px' }}>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>MealLink</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            Connecting surplus food with those in need. Join us in our mission to create a hunger-free world.
                        </p>
                    </div>

                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <h4 style={{ marginBottom: '15px' }}>Quick Links</h4>
                        <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <li style={{ marginBottom: '8px' }}><a href="/">Home</a></li>
                            <li style={{ marginBottom: '8px' }}><a href="/donor">Donate</a></li>
                            <li style={{ marginBottom: '8px' }}><a href="/events">Events</a></li>
                            <li style={{ marginBottom: '8px' }}><a href="/login">Login</a></li>
                        </ul>
                    </div>

                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <h4 style={{ marginBottom: '15px' }}>Contact Us</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>
                            📧 support@meallink.org
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            📞 +91 123 456 7890
                        </p>
                    </div>
                </div>

                <div className="text-center" style={{
                    marginTop: '40px',
                    paddingTop: '20px',
                    borderTop: '1px solid #eee',
                    color: 'var(--text-secondary)',
                    fontSize: '0.8rem'
                }}>
                    © {new Date().getFullYear()} MealLink. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
