import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Admin from './pages/Admin';

function App() {
  useEffect(() => {
    // Analytics tracking every 5 seconds
    const interval = setInterval(() => {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          if (!user.isAdmin && user.email) {
            fetch('http://localhost:5555/api/track', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: user.email, timeSpent: 5 })
            }).catch(() => {});
          }
        } catch(e) {}
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-wrap">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
