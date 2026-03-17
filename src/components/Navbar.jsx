import { Link, useLocation } from 'react-router-dom';
import { Instagram, Youtube, Twitter, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <nav className="navbar container">
        <Link to="/" className="logo">
          PEAKED<span>FORGE</span>
        </Link>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active-link' : ''} onClick={toggleMenu}>Home</Link>
          <Link to="/blogs" className={isActive('/blogs') ? 'active-link' : ''} onClick={toggleMenu}>Blogs</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active-link' : ''} onClick={toggleMenu}>Contact Us</Link>
          <Link to="/login" className={`login-btn ${isActive('/login') ? 'active-link' : ''}`} onClick={toggleMenu}>Login</Link>
          
          <div className="nav-socials mobile-only">
            <a href="#" aria-label="Instagram"><Instagram size={20}/></a>
            <a href="#" aria-label="YouTube"><Youtube size={20}/></a>
            <a href="#" aria-label="Twitter"><Twitter size={20}/></a>
          </div>
        </div>

        <div className="nav-actions desktop-only">
          <div className="nav-socials">
            <a href="#" aria-label="Instagram"><Instagram size={20}/></a>
            <a href="#" aria-label="YouTube"><Youtube size={20}/></a>
            <a href="#" aria-label="Twitter"><Twitter size={20}/></a>
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
