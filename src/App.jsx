import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { supabase } from './supabaseClient';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Admin from './pages/Admin';

function App() {
  useEffect(() => {
    // Analytics tracking every 10 seconds (optimized for supabase)
    const interval = setInterval(async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Increment time_spent in profiles table
        const { data: profile } = await supabase
          .from('profiles')
          .select('time_spent')
          .eq('id', user.id)
          .single();
        
        if (profile) {
          await supabase
            .from('profiles')
            .update({ time_spent: (profile.time_spent || 0) + 10 })
            .eq('id', user.id);
        }
      }
    }, 10000);

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
