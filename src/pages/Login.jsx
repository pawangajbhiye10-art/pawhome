import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { login, loginWithGoogle } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const destination = location.state?.from?.pathname || '/';

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Please enter both email and password');
      return;
    }

    try {
      setSubmitting(true);
      setErrorMsg('');
      await login(email, password);
      showToast('Logged in successfully');
      navigate(destination, { replace: true });
    } catch (err) {
      console.error('Login error:', err);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
        setErrorMsg('Invalid email or password. Please verify your credentials.');
      } else {
        setErrorMsg('Failed to log in. Please check your network and try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setSubmitting(true);
      setErrorMsg('');
      await loginWithGoogle();
      showToast('Signed in with Google');
      navigate(destination, { replace: true });
    } catch (err) {
      console.error('Google sign-in error:', err);
      if (err.code !== 'auth/popup-closed-by-user') {
        setErrorMsg('Google sign-in failed. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="block">
      <div className="wrap" style={{ maxWidth: 460 }}>
        {location.state?.from && (
          <div className="panel" style={{ background: '#FFF6DC', borderColor: '#F0D58A', padding: '12px 16px', marginBottom: 18 }}>
            <p style={{ margin: 0, fontSize: 14, color: 'var(--ink)' }}>
              🔒 You need to log in to continue to {location.state.from.pathname}.
            </p>
          </div>
        )}

        <div className="panel" style={{ padding: 32 }}>
          <h2 style={{ fontSize: 28, marginBottom: 8 }}>Welcome back</h2>
          <p className="sub">Log in to view your applications, wishlist, and adoption certificates.</p>

          {errorMsg && (
            <div style={{ background: '#FBE0D8', color: 'var(--coral)', padding: '10px 14px', borderRadius: 8, marginBottom: 16, fontSize: 14 }}>
              {errorMsg}
            </div>
          )}

          <button
            type="button"
            className="btn ghost"
            style={{ width: '100%', marginBottom: 18, gap: 10 }}
            onClick={handleGoogleLogin}
            disabled={submitting}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            Continue with Google
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '18px 0', color: 'var(--muted)' }}>
            <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
            <span style={{ fontSize: 13 }}>or with email</span>
            <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
          </div>

          <form onSubmit={handleEmailLogin}>
            <div className="field">
              <label htmlFor="loginEmail">Email address</label>
              <input
                id="loginEmail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="field">
              <div className="row">
                <label htmlFor="loginPass">Password</label>
                <Link to="/forgot-password" style={{ fontSize: 13, color: 'var(--forest)' }}>
                  Forgot password?
                </Link>
              </div>
              <input
                id="loginPass"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="btn" style={{ width: '100%', marginTop: 8 }} disabled={submitting}>
              {submitting ? 'Signing in...' : 'Log in'}
            </button>
          </form>

          <p className="meta" style={{ textAlign: 'center', marginTop: 20 }}>
            Don't have an account yet?{' '}
            <Link to="/signup" style={{ color: 'var(--forest)', fontWeight: 700 }}>
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
