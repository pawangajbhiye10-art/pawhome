import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="wrap" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <div className="skeleton" style={{ width: 120, height: 28, margin: '0 auto 16px' }}></div>
        <p className="meta">Checking authentication status...</p>
      </div>
    );
  }

  if (!user) {
    // Save intended destination for post-login redirect
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
