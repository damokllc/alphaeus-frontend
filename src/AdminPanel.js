import React, { useState } from 'react';
import Projects from './Projects';
import News from './News';

const ADMIN_PASSWORD = 'changeme'; // Change this to something secure!

function AdminPanel() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [section, setSection] = useState('projects');

  const handleLogin = e => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      setPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  if (!loggedIn) {
    return (
      <form onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    );
  }

  return (
    <div>
      <h2>Admin Panel</h2>
      <button onClick={() => setSection('projects')}>Manage Projects</button>
      <button onClick={() => setSection('news')}>Manage News</button>
      <button onClick={() => setLoggedIn(false)}>Logout</button>
      <div style={{ marginTop: 20 }}>
        {section === 'projects' && <Projects />}
        {section === 'news' && <News />}
      </div>
    </div>
  );
}

export default AdminPanel;