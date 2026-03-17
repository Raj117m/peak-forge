import './Login.css';

function Login() {
  return (
    <div className="login-page container">
      <div className="login-container">
        <h1 className="page-title">Access <span>Portal</span></h1>
        <p className="login-subtitle">Enter your credentials to continue your journey.</p>
        
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="athlete@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn-primary">Sign In</button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <a href="#">Create one</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
