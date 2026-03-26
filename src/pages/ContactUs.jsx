import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-page container">
      <div className="contact-header">
        <h1 className="page-title">Get in <span>Touch</span></h1>
        <p>For queries, feedback, or collaborations. We're here to help you rise.</p>
        <p style={{ marginTop: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
          Email us directly at: <a href="mailto:peakedforge@gmail.com" style={{ color: 'var(--accent)' }}>peakedforge@gmail.com</a>
        </p>
      </div>

      <div className="form-container">
        <form className="contact-form" action="mailto:peakedforge@gmail.com" method="POST" encType="text/plain">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="Name" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="Email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="Message" rows="6" placeholder="How can we help you?" required></textarea>
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
