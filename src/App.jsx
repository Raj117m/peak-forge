import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { supabase } from './supabaseClient';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Admin from './pages/Admin';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Determine anonymous user status
    let anonId = localStorage.getItem('anon_id');
    if (!anonId) {
      anonId = 'anon_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('anon_id', anonId);
      
      // Track new unique visit 
      supabase.from('anonymous_analytics').insert([{ anon_id: anonId, visits: 1, time_spent: 0, clicks: 0 }]).then(() => {}).catch(() => {});
    }
  }, []);

  useEffect(() => {
    let anonId = localStorage.getItem('anon_id');
    const interval = setInterval(async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Track logged in users time
        const { data: profile } = await supabase.from('profiles').select('time_spent').eq('id', user.id).single();
        if (profile) {
          await supabase.from('profiles').update({ time_spent: (profile.time_spent || 0) + 10 }).eq('id', user.id);
        }
      } else if (anonId) {
        // Track anonymous users time
        const { data: anonData } = await supabase.from('anonymous_analytics').select('time_spent').eq('anon_id', anonId).single();
        if (anonData) {
          await supabase.from('anonymous_analytics').update({ time_spent: (anonData.time_spent || 0) + 10 }).eq('anon_id', anonId);
        }
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Track page view / click when location changes removed due to excessive triggering

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
