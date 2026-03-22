import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './Login.css';

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isRegister) {
        // Sign Up with name in metadata
        const { data, error: signupErr } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { name }
          }
        });

        if (signupErr) throw signupErr;
        
        // Auto sign in user profile logic handled by trigger or manually
        alert('Registration successful! Please sign in.');
        setIsRegister(false);
      } else {
        // Sign In
        const { data, error: loginErr } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (loginErr) throw loginErr;

        // If it is admin
        if (email === 'admin@peakforge.com' && password === 'admin123') {
           localStorage.setItem('user', JSON.stringify({ email: data.user.email, isAdmin: true }));
           navigate('/admin');
           return;
        }

        // Increment visit count (Simple manual way if no trigger)
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.user.id)
          .single();

        if (profile) {
          await supabase
            .from('profiles')
            .update({ visits: (profile.visits || 0) + 1 })
            .eq('id', data.user.id);
        }

        localStorage.setItem('user', JSON.stringify({ ...data.user, name: profile?.name }));
        navigate('/');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page container">
      <div className="login-container">
        <h1 className="page-title">Access <span>Portal</span></h1>
        <p className="login-subtitle">Enter your credentials to continue your journey.</p>
        
        {error && <div style={{ color: '#ff4d4f', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

        <form className="login-form" onSubmit={handleSubmit}>
          {isRegister && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={isRegister} 
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="text" 
              id="email" 
              placeholder="athlete@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Processing...' : (isRegister ? 'Register' : 'Sign In')}
          </button>
        </form>

        <div className="login-footer">
          <p>
            {isRegister ? 'Already have an account? ' : "Don't have an account? "}
            <a href="#" onClick={(e) => { e.preventDefault(); setIsRegister(!isRegister); }}>
              {isRegister ? 'Sign In' : 'Create one'}
            </a>
          </p>
          <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
            <button 
              className="btn-primary" 
              style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#00ff88' }}
              onClick={(e) => {
                e.preventDefault();
                const pass = window.prompt("Enter Admin Password:");
                if (pass === "nsfw") {
                  localStorage.setItem('user', JSON.stringify({ email: 'admin', isAdmin: true }));
                  navigate('/admin');
                } else if (pass !== null) {
                  alert("Incorrect Admin Password.");
                }
              }}
            >
              Access Admin Portal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
