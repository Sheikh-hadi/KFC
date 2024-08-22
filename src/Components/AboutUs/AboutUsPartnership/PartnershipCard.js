import React from 'react';

const PartnershipCard = ({ logo, altText, description }) => {
  
  const cardStyle = {
    backgroundColor: '#1C1C1C',
    borderRadius: '10px',
    color: '#ffffff',
    textAlign: 'center',
    padding: '2rem',
    margin: '1rem 0',
  };

  const logoStyle = {
    maxWidth: '100%',
    maxHeight: '60px',
    marginBottom: '1rem',
  };

  return (
    <div className="col-md-6">
      <div style={cardStyle}>
        <img src={logo} alt={altText} style={logoStyle} />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PartnershipCard;
