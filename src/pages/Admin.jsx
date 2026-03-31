import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './Admin.css';

function Admin() {
  const [users, setUsers] = useState([]);
  const [anonStats, setAnonStats] = useState({ totalVisits: 0, totalTime: 0, totalClicks: 0, distinctUsers: 0 });
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('registered');
  const navigate = useNavigate();

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      navigate('/login');
      return;
    }
    const user = JSON.parse(userStr);
    if (!user.isAdmin) {
      navigate('/');
      return;
    }
    
    fetchUsers();
    fetchAnonStats();
  }, [navigate]);

  const fetchUsers = async () => {
    try {
      const { data, error: fetchErr } = await supabase.from('profiles').select('*');
      if (fetchErr) throw fetchErr;
      setUsers(data);
    } catch (err) {
      console.log('Registered user fetch err', err);
    }
  };

  const fetchAnonStats = async () => {
    try {
      const { data, error: err } = await supabase.from('anonymous_analytics').select('*');
      if (err) throw err;
      if (data) {
        let visits = 0, time = 0, clicks = 0;
        data.forEach(d => {
          visits += (d.visits || 0);
          time += (d.time_spent || 0);
          clicks += (d.clicks || 0);
        });
        setAnonStats({
          totalVisits: visits,
          totalTime: time,
          totalClicks: clicks,
          distinctUsers: data.length
        });
      }
    } catch (e) {
      console.log('No anonymous analytics table exists yet, please create one in supabase', e);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      if (!search) {
        fetchUsers();
        return;
      }
      const { data, error: searchErr } = await supabase
        .from('profiles')
        .select('*')
        .or(`name.ilike.%${search}%,email.ilike.%${search}%`);
      
      if (searchErr) throw searchErr;
      setUsers(data);
    } catch (err) {
      setError('Search failed: ' + err.message);
    }
  };

  return (
    <div className="admin-page container">
      <div className="admin-header">
        <h1 className="page-title">Admin <span>Dashboard</span></h1>
        <p className="admin-subtitle">Analytics and user management</p>
      </div>

      <div className="tabs">
        <button className={`tab-btn ${activeTab === 'registered' ? 'active' : ''}`} onClick={() => setActiveTab('registered')}>Registered Users</button>
        <button className={`tab-btn ${activeTab === 'anonymous' ? 'active' : ''}`} onClick={() => setActiveTab('anonymous')}>General Analytics (Anonymous)</button>
        <button className={`tab-btn ${activeTab === 'strategy' ? 'active' : ''}`} onClick={() => setActiveTab('strategy')}>Blog Strategy Details</button>
      </div>

      {activeTab === 'registered' && (
        <>
          <div className="admin-controls">
            <form onSubmit={handleSearch} className="search-form">
              <input 
                type="text" 
                placeholder="Search by name or email..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="btn-primary search-btn">Search</button>
            </form>
          </div>
          {error && <p style={{color: 'red'}}>{error}</p>}
          <div className="admin-content">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Time Spent</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="4" style={{textAlign: 'center', padding: '2rem'}}>No users found.</td>
                  </tr>
                ) : (
                  users.map(u => (
                    <tr key={u.id}>
                      <td>{(u.id || '').substring(0, 8)}...</td>
                      <td>{u.name}</td>
                      <td>{u.email}</td>
                      <td>{Math.floor((u.time_spent || 0) / 60)}m {(u.time_spent || 0) % 60}s</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      )}

      {activeTab === 'anonymous' && (
        <div className="analytics-grid">
          <div className="analytics-card">
            <h3>Unique Anonymous Users</h3>
            <p className="stat-number">{anonStats.distinctUsers}</p>
          </div>
          <div className="analytics-card">
            <h3>Total Anonymous Clicks/Visits</h3>
            <p className="stat-number">{anonStats.totalClicks}</p>
          </div>
          <div className="analytics-card">
            <h3>Total Time Spent (Global)</h3>
            <p className="stat-number">{Math.floor(anonStats.totalTime / 60)}m {anonStats.totalTime % 60}s</p>
          </div>
          
          <div className="analytics-note">
            <p><strong>Database Note:</strong> If all these read zero, make sure you have created the <code>anonymous_analytics</code> table in your Supabase backend.</p>
          </div>
        </div>
      )}

      {activeTab === 'strategy' && (
        <div className="strategy-section">
          <div className="strategy-card">
            <div className="strategy-icon">🎯</div>
            <div className="strategy-content">
              <h3>Blog Topic Selection & Justification</h3>
              <p className="strategy-desc">Clearly explain the chosen topic and the rationale behind selecting it.</p>
              <div className="strategy-text">
                <p><strong>Chosen Topics:</strong> Elite Sports Performance focusing on Powerlifting, Swimming, and Taekwondo.</p>
                <p><strong>Rationale:</strong> PeakForge caters to high-performance athletes requiring specialized, data-driven training methodologies rather than generic fitness advice. These diverse disciplines cover pure strength, aquatic endurance, and explosive martial arts, addressing a broad spectrum of elite athletic needs.</p>
              </div>
            </div>
          </div>

          <div className="strategy-card">
            <div className="strategy-icon">👥</div>
            <div className="strategy-content">
              <h3>Target Audience Identification</h3>
              <p className="strategy-desc">Define your intended audience segment with relevant details.</p>
              <div className="strategy-text">
                <p><strong>Audience Segment:</strong> Intermediate to advanced athletes, dedicated sports coaches, and competitive fitness professionals.</p>
                <p><strong>Details:</strong> These individuals are highly dedicated, data-oriented, and actively seeking evidence-based knowledge in biomechanics, physiological adaptations, and optimal programming structures to enhance their competitive performance edge.</p>
              </div>
            </div>
          </div>

          <div className="strategy-card">
            <div className="strategy-icon">👤</div>
            <div className="strategy-content">
              <h3>Buyer Persona Creation</h3>
              <p className="strategy-desc">Present a detailed buyer persona reflecting your audience insights.</p>
              <div className="strategy-text">
                <p><strong>Name:</strong> Elite Coach Ethan (32 years old, Strength & Conditioning Coach)</p>
                <p><strong>Background:</strong> Works with regional and national-level competitive athletes. Holds a degree in Kinesiology.</p>
                <p><strong>Goals & Pain Points:</strong> Always hunting for the latest research on sports physiology. Frustrated by superficial "fitness influencer" content. Needs deep, actionable programming strategies and performance analytics.</p>
                <p><strong>Value Proposition:</strong> PeakForge provides Ethan with vetted, high-level technical breakdowns that he can directly apply to his athletes' training cycles.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
