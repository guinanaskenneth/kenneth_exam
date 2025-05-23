import React, { useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dccLogo from './assets/dcc-logo.png';
import centralLightDraw from './assets/image.png';
import backgroundImage from './assets/your-background-image.png';

function App() {
  const [activeSection, setActiveSection] = useState('welcome');

  const sections = {
    welcome: (
      <div>
        <h2>Welcome to Davao Central College</h2>
        <p>This visual learning environment provides access to courses, announcements, and academic resources.</p>
      </div>
    ),
    about: (
      <div style={{ position: 'relative', minHeight: '100%' }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '150px',
          backgroundImage: `url(${centralLightDraw})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          opacity: 0.6,
          zIndex: 0
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2>About Us</h2>
          <p><strong>Davao Central College</strong> was founded in 1942 and has grown to become a hub for educational excellence in Davao City.</p>
          <h3 className="mt-4">Vision</h3>
          <p>Empowered individuals imbued with Christian ideals for service.</p>
          <h3 className="mt-4">Mission</h3>
          <p>We commit ourselves to:</p>
          <ul>
            <li>Provide integral formation of students</li>
            <li>Develop God-loving and community service-oriented individuals</li>
            <li>Promote competence through quality instruction and research for nation building</li>
          </ul>
          <h3 className="mt-4">Goals</h3>
          <p>To achieve its mission, DCC Inc., aims to:</p>
          <ol>
            <li>Strengthen the total development of persons</li>
            <li>Develop a self-sustained community</li>
            <li>Cultivate the value of patriotism</li>
            <li>Promote a global standard of education</li>
            <li>Intensify faculty development program</li>
            <li>Cultivate a strong research culture</li>
            <li>Upgrade physical plant and facilities</li>
          </ol>
          <h3 className="mt-4">Core Values</h3>
          <div className="d-flex flex-wrap gap-3">
            <span className="badge bg-success p-2">Discipline</span>
            <span className="badge bg-success p-2">Competence</span>
            <span className="badge bg-success p-2">Compassion</span>
            <span className="badge bg-success p-2">Integrity</span>
          </div>
        </div>
      </div>
    ),
    programs: (
      <div>
        <h2>Academic Programs</h2>
        <ul>
          <li>BS in Information Technology</li>
          <li>BS in Educational Administration</li>
          <li>BS in Education</li>
        </ul>
      </div>
    ),
    admission: (
      <div>
        <h2>Admission</h2>
        <p><strong>Requirements:</strong></p>
        <ul>
          <li>Grade 12 Diploma / Transcript of Records</li>
          <li>Completed Application Form</li>
        </ul>
        <p><strong>Procedure:</strong></p>
        <ol>
          <li>Submit the application form</li>
          <li>Provide all required documents</li>
          <li>Wait for approval and payment instructions</li>
        </ol>
      </div>
    ),
    contact: (
      <div>
        <h2>Contact Us</h2>
        <ul>
          <li>Davao City, Philippines</li>
          <li>(082) 123–8407</li>
          <li>info@davaocentral.edu.ph</li>
        </ul>
      </div>
    )
  };

  const navButtonStyle = (section) => ({
    backgroundColor: activeSection === section ? '#9b30ff' : 'green',
    color: 'white',
    border: 'none',
    padding: '10px 16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer'
  });

  return (
    <div className="d-flex flex-column min-vh-100" style={{
      position: 'relative'
    }}>
      {/* Background image with 70% opacity */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.7,
        zIndex: -1
      }} />

      <header className="text-white" style={{
        height: '100px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${dccLogo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 100, 0, 0.5)',
          zIndex: 1
        }} />
        <Container className="h-100 d-flex align-items-center position-relative" style={{ zIndex: 2 }}>
          <h1 className="mb-0 text-center w-100" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)'
          }}>
            DAVAO CENTRAL COLLEGE
          </h1>
        </Container>
      </header>

      <Container className="flex-grow-1 mt-4 mb-4">
        <Row className="justify-content-center mb-4">
          <Col xs={12} className="d-flex flex-wrap justify-content-center gap-2">
            <button style={navButtonStyle('welcome')} onClick={() => setActiveSection('welcome')}>Home</button>
            <button style={navButtonStyle('about')} onClick={() => setActiveSection('about')}>About</button>
            <button style={navButtonStyle('programs')} onClick={() => setActiveSection('programs')}>Academics</button>
            <button style={navButtonStyle('admission')} onClick={() => setActiveSection('admission')}>Admission</button>
            <button style={navButtonStyle('contact')} onClick={() => setActiveSection('contact')}>Contact</button>
          </Col>
        </Row>

        <Card className="p-4 mb-4">
          {sections[activeSection]}
        </Card>
      </Container>

      <footer className="bg-success text-white py-3 mt-auto">
        <Container>
          <p className="text-center mb-0">© 2022 Davao Central College. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;