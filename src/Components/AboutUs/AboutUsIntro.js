import React from 'react';
import { Row, Col } from 'react-bootstrap';

const AboutUsIntro = () => {
  const text = `
    KFC entered Pakistan in 1997 and since then, it's been a journey
    full of excitement and Finger Lickin’ goodness! The first KFC
    restaurant opened in Pakistan in Gulshan Iqbal, Karachi and
    now our Finger Lickin’ Chicken is available in 37 cities with over
    128 restaurants! Being the most loved fast food chain in Pakistan,
    KFC leaves no stone unturned to provide its customers the most
    delicious chicken and an excellent dining experience.
  `;

  const lines = text
    .trim()
    .split(' ')
    .reduce((acc, word, index) => {
      if (index % 17 === 0) acc.push([]);
      acc[acc.length - 1].push(word);
      return acc;
    }, [])
    .map(line => line.join(' '));

  return (
    <div fluid style={{ backgroundColor: 'black', padding: '20px 0', position: 'relative' }}>
      {/* Heading Section */}
      <Row>
        <Col md={12}>
          <h2 style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
            About us
          </h2>
        </Col>
      </Row>
      
      {/* Main Content Section */}
      <Row className="justify-content-center">
        {/* Left Navigation Arrow */}
        <Col
          md={1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '2px solid red',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <i className="fas fa-chevron-left" style={{ color: 'white', fontSize: '20px' }}></i>
          </div>
        </Col>

        {/* Main Paragraph Box */}
        <Col
          md={9}  // Adjusted to make the paragraph box wider
          style={{
            backgroundColor: '#2e2e2e',
            color: 'white',
            padding: '50px',
            borderRadius: '10px',
            position: 'relative',
            textAlign: 'left',  // Left-align text within the paragraph box
          }}
        >
          {/* Render each line of the text content */}
          {lines.map((line, i) => (
            <p key={i} style={{ marginBottom: 0 }}>{line}</p>
          ))}

          {/* Inner Box with Red Background */}
          <div 
            style={{ 
              backgroundColor: '#e4002b', 
              color: 'white', 
              padding: '10px', 
              borderRadius: '10px', 
              fontWeight: 'bold', 
              textAlign: 'center',
              position: 'absolute',
              right: '25px', // Positioned close to the main paragraph box
              top: '50%',
              transform: 'translateY(-50%)',
              width: '400px',  // Adjusted width for better fit
              maxWidth: '100%',
            }}
          >
            WE PRIDE OURSELVES ON USING QUALITY HALAL CHICKEN AND LOCAL
            INGREDIENTS FROM TRUSTED SUPPLIERS
          </div>
        </Col>

        {/* Right Navigation Arrow */}
        <Col
          md={1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '2px solid red',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <i className="fas fa-chevron-right" style={{ color: 'white', fontSize: '20px' }}></i>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUsIntro;
