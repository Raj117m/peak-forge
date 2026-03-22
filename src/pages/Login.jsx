import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (email === 'admin' && password === 'admin') {
      // Set admin session
      localStorage.setItem('user', JSON.stringify({ email: 'admin', isAdmin: true }));
      navigate('/admin');
      return;
    }

    try {
      const response = await fetch('http://localhost:5555/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Handle successful login
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/');
    } catch (err) {
      setError(err.message);
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
          <button type="submit" className="btn-primary">
            {isRegister ? 'Register' : 'Sign In'}
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
