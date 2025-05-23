import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="bg-white border-bottom py-3">
      <Container fluid>
        <Row className="align-items-center">
          <Col xs="auto">
            <img
              src="/dcc-logo.png"
              alt="DCC Logo"
              style={{ height: '70px' }}
            />
          </Col>
          <Col>
            <h4 className="mb-0 text-success" style={{ fontWeight: 'bold', letterSpacing: '1px' }}>
              DAVAO CENTRAL COLLEGE VIRTUAL LEARNING ENVIRONMENT
            </h4>
            <small className="text-muted">TORIL, DAVAO CITY</small>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
