import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Instagram, Youtube, Twitter, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        setUser(JSON.parse(userStr));
      } catch (e) {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path;

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
    setIsOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar container">
        <Link to="/" className="logo">
          peaked<span>forge</span>
        </Link>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active-link' : ''} onClick={toggleMenu}>Home</Link>
          <Link to="/blogs" className={isActive('/blogs') ? 'active-link' : ''} onClick={toggleMenu}>Blogs</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active-link' : ''} onClick={toggleMenu}>Contact Us</Link>
          
          {user ? (
            <>
              <span style={{ color: '#00ff88', fontWeight: 'bold' }}>
                Hi, {user.name || user.email?.split('@')[0]}!
              </span>
              <a href="#" className="login-btn" onClick={handleLogout}>Logout</a>
            </>
          ) : (
            <Link to="/login" className={`login-btn ${isActive('/login') ? 'active-link' : ''}`} onClick={toggleMenu}>Login</Link>
          )}
          
          <div className="nav-socials mobile-only">
            <a href="https://instagram.com/raj117m" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20}/></a>
            <a href="https://youtube.com/@peakforge-19k?si=czq9thIrFHc-c4Jr" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20}/></a>
            <a href="https://youtube.com/shorts/_6HzLIJPH2A?si=x2VeRkHVnygXjKAn" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={20}/></a>
          </div>
        </div>

        <div className="nav-actions desktop-only">
          <div className="nav-socials">
            <a href="https://instagram.com/raj117m" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20}/></a>
            <a href="https://youtube.com/@peakforge-19k?si=czq9thIrFHc-c4Jr" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20}/></a>
            <a href="https://youtube.com/shorts/_6HzLIJPH2A?si=x2VeRkHVnygXjKAn" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={20}/></a>
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
