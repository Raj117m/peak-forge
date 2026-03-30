import { Link } from 'react-router-dom';
import './Home.css';

const sportsData = [
  { name: 'Cricket', img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&q=80' },
  { name: 'Football', img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&q=80' },
  { name: 'Taekwondo', img: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=500&q=80' },
  { name: 'Swimming', img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&q=80' },
  { name: 'Calisthenics', img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&q=80' },
  { name: 'Powerlifting', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80' },
  { name: 'Basketball', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&q=80' }
];

function Home() {
  return (
    <div className="home-page">
      {/* Decorative Live Orbs */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content" style={{ zIndex: 2, position: 'relative' }}>
          <h1 className="hero-title">Build Strength.<br/><span>Improve Performance.</span><br/>No Fluff.</h1>
          <p className="hero-subtitle">Train smarter, push harder, and break boundaries with proven science-based performance protocols.</p>
          <Link to="/blogs" className="btn-primary">Read Blogs</Link>
        </div>
      </section>

      {/* Sports Covered visually dynamic */}
      <section className="sports-section" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container">
          <h2 className="section-title">Sports <span>Covered</span></h2>
          <div className="sports-image-grid">
            {sportsData.map(sport => (
              <Link to={`/blogs?sport=${sport.name}`} key={sport.name} className="sport-img-btn interactive-tag">
                <img src={sport.img} alt={sport.name} className="sport-img-bg" />
                <div className="sport-img-overlay">
                  <h3>{sport.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Insights Section */}
      <section className="offers-section">
        <div className="container">
          <h2 className="section-title">Mind-Blowing <span>Facts</span></h2>
          <div className="offers-grid">
            <div className="offer-card">
              <h3>The Human Kangaroo</h3>
              <p>Did you know the Achilles tendon functions like a massive spring? Elite athletes can store and release up to 40% of their energy just through tendon recoil!</p>
            </div>
            <div className="offer-card">
              <h3>Lactate is NOT the Enemy</h3>
              <p>Lactic acid doesn't actually cause muscle soreness. It's an essential metabolic fuel source that your body actively recycles during intense training bursts.</p>
            </div>
            <div className="offer-card">
              <h3>Sleep &gt; Supplements</h3>
              <p>A single night of sleep deprivation can reduce your time-to-exhaustion by 11%. Literally no pre-workout in the world can out-stimulate a well-rested athlete.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="blog-preview-section">
        <div className="container">
          <h2 className="section-title">Latest <span>Insights</span></h2>
          <div className="blog-grid" style={{ zIndex: 2, position: 'relative' }}>
            <div className="blog-card" style={{ border: '1px solid var(--accent)' }}>
              <div className="blog-content">
                <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>The Science of Hypertrophy</h4>
                <p>Building muscle takes more than just lifting heavy weights. It requires a proper understanding of progressive overload...</p>
                <Link to="/blogs" className="btn-primary" style={{ marginTop: '1rem', padding: '8px 16px', fontSize: '0.9rem' }}>Read More</Link>
              </div>
            </div>
            <div className="blog-card" style={{ border: '1px solid var(--accent)' }}>
              <div className="blog-content">
                <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Explosive Speed on the Pitch</h4>
                <p>Football demands rapid acceleration and deceleration. Here is how you structure your plyometrics...</p>
                <Link to="/blogs" className="btn-primary" style={{ marginTop: '1rem', padding: '8px 16px', fontSize: '0.9rem' }}>Read More</Link>
              </div>
            </div>
            <div className="blog-card" style={{ border: '1px solid var(--accent)' }}>
              <div className="blog-content">
                <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Rotational Power for Batsmen</h4>
                <p>Generating boundary-clearing power starts from the ground up, moving through your hips and core before reaching the bat...</p>
                <Link to="/blogs" className="btn-primary" style={{ marginTop: '1rem', padding: '8px 16px', fontSize: '0.9rem' }}>Read More</Link>
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
