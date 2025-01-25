import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Footer = () => {
  // Function to trigger alert
  const handleLinkClick = () => {
    window.open('mailto:xastance@gmail.com', '_blank');
  };

  return (
    <footer className="bg-dark text-light pt-4 mt-auto">
      <Container>
        <Row className="d-flex justify-content-between text-center text-md-start">
          <Col md="4" className="mb-3 mb-md-0">
            <h5>Xastance Jackson</h5>
            <p>Turning caffeine into code, 
                and conquering one bug after another.</p>
          </Col>
          <Col md="4" className="mb-3 mb-md-0 text-md-end text-center">
            <h5>Contact Me</h5>
            <p>
              Email: <span style={{ cursor: 'pointer', color: '#61dafb' }} onClick={handleLinkClick}>x@gmail.com</span>
            </p>
            <p>Phone: 042497----</p>
          </Col>
        </Row>
      </Container>
      <Container className="text-center">
        <hr className="bg-light" />
        <Row>
          <Col className="text-center mb-5">
            <p className="mb-0">&copy; 2025 Xastance Jackson. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
