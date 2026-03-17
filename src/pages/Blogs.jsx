import './Blogs.css';

function Blogs() {
  return (
    <div className="blogs-page container">
      <h1 className="page-title">Performance <span>Insights</span></h1>
      
      <div className="coming-soon-wrapper">
        <h2 className="coming-soon-text">Blogs Coming Soon</h2>
        <p>We are currently forging the best content to elevate your performance.</p>
      </div>

      <div className="blog-grid blur-effect">
        {/* Render empty cards to maintain structure */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="blog-card">
            <div className="blog-image placeholder"></div>
            <div className="blog-content">
              <h4>Blog Title Placeholder</h4>
              <p>Short description of the blog post goes here.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
