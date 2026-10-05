import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="block">
      <div className="wrap" style={{ maxWidth: 520, textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ fontSize: 72, marginBottom: 12 }}>🐾</div>
        <h1 style={{ fontSize: 48, color: 'var(--forest)', marginBottom: 8 }}>404</h1>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>Page Not Found</h2>
        <p className="meta" style={{ fontSize: 16, marginBottom: 28 }}>
          The page or pet listing you are looking for doesn't exist, has been adopted, or was moved.
        </p>
        <div className="row" style={{ justifyContent: 'center', gap: 12 }}>
          <Link to="/" className="btn">
            Return to Pet Directory
          </Link>
          <Link to="/how-it-works" className="btn ghost">
            How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
