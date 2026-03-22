import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './Admin.css';

function Admin() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check admin session
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
  }, [navigate]);

  const fetchUsers = async () => {
    try {
      const { data, error: fetchErr } = await supabase
        .from('profiles')
        .select('*');
      
      if (fetchErr) throw fetchErr;
      setUsers(data);
    } catch (err) {
      setError('Failed to fetch users: ' + err.message);
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
              <th>Visits</th>
              <th>Time Spent</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" style={{textAlign: 'center', padding: '2rem'}}>No users found.</td>
              </tr>
            ) : (
              users.map(u => (
                <tr key={u.id}>
                  <td>{(u.id || '').substring(0, 8)}...</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.visits}</td>
                  <td>{Math.floor((u.time_spent || 0) / 60)}m {(u.time_spent || 0) % 60}s</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
