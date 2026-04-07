import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            peaked<span>forge</span>
          </Link>
          <p className="footer-tagline">Build Strength. Improve Performance. No Fluff.</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/peakedforge_380/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={24} /></a>
            <a href="https://youtube.com/@peakforge-19k?si=czq9thIrFHc-c4Jr" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={24} /></a>
            <a href="https://youtube.com/shorts/_6HzLIJPH2A?si=x2VeRkHVnygXjKAn" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={24} /></a>
          </div>
        </div>
        
        <div className="footer-sitemap">
          <h3>Sitemap</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PeakedForge. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
