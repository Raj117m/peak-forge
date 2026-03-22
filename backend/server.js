const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error('Database opening error: ', err);
});

// Create tables
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    visits INTEGER DEFAULT 1,
    timeSpent INTEGER DEFAULT 0
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS highscores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    score INTEGER DEFAULT 0
  )`, () => {
    // Seed the first row if empty
    db.get('SELECT * FROM highscores WHERE id = 1', (err, row) => {
      if (!row) {
        db.run('INSERT INTO highscores (score) VALUES (100)'); // Seed with 100
      }
    });
  });
});

// Game endpoints
app.get('/api/highscore', (req, res) => {
  db.get('SELECT score FROM highscores WHERE id = 1', (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ highscore: row ? row.score : 0 });
  });
});

app.post('/api/highscore', (req, res) => {
  const { score } = req.body;
  db.get('SELECT score FROM highscores WHERE id = 1', (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row || score > row.score) {
      db.run('UPDATE highscores SET score = ? WHERE id = 1', [score], (err2) => {
        if (err2) return res.status(500).json({ error: err2.message });
        res.json({ success: true, newHighscore: score });
      });
    } else {
      res.json({ success: true, newHighscore: row.score });
    }
  });
});

// Login / Register
app.post('/api/login', (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    
    if (row) {
      if (row.password !== password) {
        return res.status(401).json({ error: 'Invalid password' });
      }
      // Increment visits
      db.run('UPDATE users SET visits = visits + 1 WHERE id = ?', [row.id], (err2) => {
        if (err2) return res.status(500).json({ error: err2.message });
        res.json({ message: 'Login successful', user: { ...row, visits: row.visits + 1 } });
      });
    } else {
      // Register new user
      const initName = name || email.split('@')[0];
      db.run('INSERT INTO users (name, email, password, visits, timeSpent) VALUES (?, ?, ?, 1, 0)', 
        [initName, email, password], function(err2) {
        if (err2) return res.status(500).json({ error: err2.message });
        db.get('SELECT * FROM users WHERE id = ?', [this.lastID], (err3, newRow) => {
          if (err3) return res.status(500).json({ error: err3.message });
          res.json({ message: 'Registration successful', user: newRow });
        });
      });
    }
  });
});

// Track time spent
app.post('/api/track', (req, res) => {
  const { email, timeSpent } = req.body; // timeSpent in seconds
  if (!email || !timeSpent) return res.status(400).json({ error: 'Missing data' });
  
  db.run('UPDATE users SET timeSpent = timeSpent + ? WHERE email = ?', [timeSpent, email], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

// Admin endpoint to get all users
app.get('/api/users', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Admin endpoint for search
app.get('/api/users/search', (req, res) => {
  const { q } = req.query;
  const searchQuery = `%${q}%`;
  db.all('SELECT * FROM users WHERE name LIKE ? OR email LIKE ?', [searchQuery, searchQuery], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

const server = app.listen(5555, () => {
  console.log('Backend server running on port 5555');
});

server.on('error', (e) => {
  console.error('Server error', e);
});

// Force process to stay alive
setInterval(() => {}, 100000);
