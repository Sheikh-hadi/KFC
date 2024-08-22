import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const AboutUsHistorySection = () => {
  return (
    <div style={{ 
      backgroundColor: '#000', 
      minHeight: '70vh', // Full viewport height
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
    }}>
      <div style={{ 
        backgroundColor: '#231f20', 
        padding: '40px', 
        borderRadius: '10px', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%', 
        maxWidth: '1200px',
        zIndex: 1,
      }}>
        <Row className="align-items-center" style={{ width: '100%' }}>
          {/* Image Column */}
          <Col md={4}>
            <Image 
              src="historyImg.png"  // Replace with your actual image path
              fluid 
              style={{ 
                borderRadius: '10px', 
                width: '100%', 
                maxHeight: '350px', 
                objectFit: 'cover',
              }} 
            />
          </Col>

          {/* Text Content Column */}
          <Col md={8} style={{ color: '#fff', paddingLeft: '30px' }}>
            <h3 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '20px' , textAlign: 'left'}}>History</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', textAlign: 'left' }}>
              It all started with Colonel Harland Sanders, the man who convinced the world by saying 
              “We do chicken right!” Sanders took a great deal of time perfecting his iconic secret 
              recipe of 11 herbs and spices, a legacy he’s brought to the world through KFC’s 10,000+ 
              restaurants. Starting from outside of his gas station in Korbin, Kentucky to being a globally 
              recognized face, we owe our success to the Colonel’s hard work and passion for sharing his 
              love for chicken with the world!
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutUsHistorySection;
