import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="hero-title">Build Strength.<br/><span>Improve Performance.</span><br/>No Fluff.</h1>
          <p className="hero-subtitle">Train smarter, push harder, and break boundaries with proven science-based performance protocols.</p>
          <Link to="/blogs" className="btn-primary">Explore Training</Link>
        </div>
      </section>

      {/* What This Platform Offers */}
      <section className="offers-section">
        <div className="container">
          <h2 className="section-title">What <span>We Offer</span></h2>
          <div className="offers-grid">
            <div className="offer-card">
              <h3>Beginner Training</h3>
              <p>Foundational strength and conditioning programs designed to build resilience from the ground up.</p>
            </div>
            <div className="offer-card">
              <h3>Advanced Performance</h3>
              <p>Elite-level programming focusing on power generation, speed dynamics, and muscular hypertrophy.</p>
            </div>
            <div className="offer-card">
              <h3>Sport-Specific Training</h3>
              <p>Tailored physical prep regimens optimized for direct transfer to your field of play.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Covered */}
      <section className="sports-section">
        <div className="container">
          <h2 className="section-title">Sports <span>Covered</span></h2>
          <div className="sports-grid">
            <div className="sport-tag">Cricket</div>
            <div className="sport-tag">Football</div>
            <div className="sport-tag">Taekwondo</div>
            <div className="sport-tag">Swimming</div>
            <div className="sport-tag">Calisthenics</div>
            <div className="sport-tag">Powerlifting</div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="blog-preview-section">
        <div className="container">
          <h2 className="section-title">Latest <span>Insights</span></h2>
          <div className="blog-grid">
            <div className="blog-card blur-effect">
              <div className="blog-image placeholder"></div>
              <div className="blog-content">
                <h4>Coming Soon</h4>
                <p>New articles dropping shortly.</p>
              </div>
            </div>
            <div className="blog-card blur-effect">
              <div className="blog-image placeholder"></div>
              <div className="blog-content">
                <h4>Coming Soon</h4>
                <p>New articles dropping shortly.</p>
              </div>
            </div>
            <div className="blog-card blur-effect">
              <div className="blog-image placeholder"></div>
              <div className="blog-content">
                <h4>Coming Soon</h4>
                <p>New articles dropping shortly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof">
        <div className="container social-proof-content">
          <h2>Join athletes improving their performance.</h2>
          <p>Elevate your game today and connect with a community of driven individuals.</p>
          <Link to="/login" className="btn-primary">Join the Community</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
