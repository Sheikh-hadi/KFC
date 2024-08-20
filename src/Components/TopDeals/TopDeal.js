import React, { useState } from 'react';

const TopDeal = ({ imageSrc, title, description, price, addon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    container: {
      padding: '20px',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center', // Ensure each card is centered within its container
    },
    card: {
      backgroundColor: '#1c1c1c',
      borderRadius: '8px',
      padding: '15px',
      textAlign: 'left',
      position: 'relative',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      width: '300px', // Ensure all cards have the same width
    },
    imageContainer: {
      borderRadius: '8px',
      marginBottom: '-50px',
    },
    image: {
      width: '100%',
      borderRadius: '8px',
      transform: isHovered ? 'scale(1.2)' : 'scale(1)',
      transition: 'transform 0.2s ease',
    },
    title: {
      marginTop: '10px',
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#fff',
    },
    description: {
      fontSize: '17px',
      color: '#ddd',
    },
    price: {
      marginTop: '-10px',
      fontWeight: 'bold',
      fontSize: '18px',
    },
    button: {
        padding: '10px 20px',
      backgroundColor: isHovered ? '#FFF' : '#E50914',
      color: isHovered ? '#E50914' : '#FFF',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease', // Smooth transition effect
    },
    topBarContainer: {
      display: 'flex',
      alignItems: 'center',
      padding: '0px 0',
      position: 'absolute',
      top: '0px',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    topBar: {
      height: '25px',
      backgroundColor: '#ea002a',
      width: '15px',
      margin: '0px 3px',
    },
    heartIcon: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      color: '#E50914',
      fontSize: '18px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div
        style={styles.card}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={styles.topBarContainer}>
          <div style={styles.topBar}></div>
          <div style={styles.topBar}></div>
          <div style={styles.topBar}></div>
        </div>
        <div style={styles.heartIcon}>❤️</div>
        <div style={styles.imageContainer}>
          <img src={imageSrc} alt={title} style={styles.image} />
        </div>
        <div style={styles.title}>{title}</div>
        <p style={styles.description}>{description}</p>
        <p style={styles.price}>Rs {price}</p>
        <button
      style={styles.button}

































      
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      + ADD TO BUCKET
    </button>
      </div>
    </div>
  );
};

export default TopDeal;