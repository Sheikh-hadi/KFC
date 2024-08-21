import React from 'react';

const Basket = ({ year, title, description,  }) => {
  return (
    <div style={{ 
      position: 'relative',
      margin: '20px',
      textAlign: 'center',
      color: '#fff',
      display: 'inline-block',
    }}>
      {/* Basket shape */}
      <div style={{
        position: 'relative',
        width: '200px',
        height: '200px',
        backgroundColor: '#000',
        borderRadius: '0 0 20% 20% / 0 0 60% 60%',
        border: '3px solid #ff0000',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}>
      
        
        <div style={{ 
          padding: '60px 10px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          boxSizing: 'border-box',
        }}>
          <h2 style={{ fontSize: '2rem', margin: '0' }}>{year}</h2>
          <p style={{ fontWeight: 'bold', margin: '10px 0' }}>{title}</p>
          <p style={{ fontSize: '1rem', lineHeight: '1.4' }}>{description}</p>
        </div>
      </div>

     
    </div>
  );
};

export default Basket;
