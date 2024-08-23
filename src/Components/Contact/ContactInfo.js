import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactInfo = ({ contactItems }) => (
  <Row className="justify-content-center">
    {contactItems && contactItems.map((item, index) => (
      <Col
        key={index}
        xs={12}
        md={5}
        style={{
          backgroundColor: '#1A1A1A',
          padding: '20px',
          borderRadius: '10px',
          color: '#fff',
          marginBottom: '20px',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ color: '#D82E35', marginRight: '10px' }}>{item.icon}</div>
        <div>
          <h5 style={{ marginBottom: '5px', fontSize: '1.1rem', fontWeight: 'bold' }}>{item.title}</h5>
          <p style={{ marginBottom: '0', fontSize: '0.9rem' }}>{item.description}</p>
        </div>
      </Col>
    ))}
  </Row>
);

// Set default props to prevent errors if no contactItems are passed
ContactInfo.defaultProps = {
  contactItems: [],
};

export default ContactInfo;
