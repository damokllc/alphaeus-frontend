import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Projects from './Projects';
import News from './News';
import Contact from './Contact';
import AdminPanel from './AdminPanel';
import AboutUs from './AboutUs';
import Services from './Services';
import Sustainability from './Sustainability';
import HealthSafety from './HealthSafety';

function App() {
  const [page, setPage] = useState('home');
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  if (page === 'home') {
    return (
      <div style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <video
          src="/videos/homepage.mp4" // <-- update this filename if needed
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: 0
          }}
        />
        <div style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          textAlign: 'center'
        }}>
          <h1
            style={{
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: 'bold',
              marginTop: '30vh',
              textShadow: '0 2px 8px rgba(0,0,0,0.7)'
            }}
          >
            Alphaeus Engineering &amp; Manufacturing
          </h1>
          <button
            style={{
              marginTop: 40,
              padding: '16px 40px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              borderRadius: 8,
              border: 'none',
              background: '#003366',
              color: '#fff',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
            onClick={() => setPage('services')}
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  // All other pages
  return (
    <div>
      <Navbar onNavigate={setPage} adminLoggedIn={adminLoggedIn} page={page} />
      {page === 'projects' && adminLoggedIn && <Projects />}
      {page === 'news' && adminLoggedIn && <News />}
      {page === 'contact' && <Contact />}
      {page === 'admin' && <AdminPanel setAdminLoggedIn={setAdminLoggedIn} />}
      {page === 'about' && <AboutUs />}
      {page === 'services' && <Services />}
      {page === 'sustainability' && <Sustainability />}
      {page === 'health' && <HealthSafety />}
      <Footer />
    </div>
  );
}

export default App;