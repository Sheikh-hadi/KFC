import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap'; // Added Button here

const ExploreMenu = () => {
  const items = [
    { src: 'burger1.png', label: 'Everyday Value' },
    { src: 'burger2.png', label: 'Ala-Carte-&-Combos' },
    { src: 'broast1.png', label: 'Promotion' },
    { src: 'deal1.png', label: 'Signature-Boxes' },
    { src: 'CrunchCombo.png', label: 'Sharing' },
  ];

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '24px',
    color: '#fff',
    cursor: 'pointer',
  };

  const colStyle = {
    textAlign: 'center',
    position: 'relative',
    padding: '20px',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: '#111',
    margin: '0 10px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  };

  const colHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.4)',
  };

  return (
    <Container fluid style={{ backgroundColor: '#000', padding: '50px 0' }}>
      <Row>
        <Col xs={12} style={{ marginLeft: '90px', textAlign: 'left', color: '#fff' }}>
          <Button
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '20px',
              backgroundColor: 'black', // Button background color
              border: 'none',
              padding: '0px 60px',
              marginBottom:'20px',
            }}
          >
           Explore Menu
          </Button>
          {/* <div style={{ width: '50px', height: '2px',padding: '0px 20px', backgroundColor: '#e4002b', marginTop: '10px' }}></div> */}
        </Col>
      </Row>
      <Row style={{ position: 'relative', justifyContent: 'center' }}>
        {items.map((item, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={2}
            style={colStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = colHoverStyle.transform;
              e.currentTarget.style.boxShadow = colHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <Image src={item.src} roundedCircle fluid />
            <div style={{ color: '#fff', marginTop: '10px' }}>{item.label}</div>
            <div style={{ width: '30px', height: '2px', backgroundColor: '#e4002b', margin: '10px auto' }}></div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExploreMenu;
