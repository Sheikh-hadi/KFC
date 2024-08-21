import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const KFCMitaoBhook = () => {
  const containerStyle = {
    backgroundColor: '#1C1C1C',
    padding: '2rem 0',
    textAlign: 'center',
    color: '#ffffff',
  };

  const logoStyle = {
    maxWidth: '300px',
    marginBottom: '2rem',
  };

  const textStyle = {
    fontSize: '1.2rem',
    maxWidth: '900px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      <div className="container">
        <img
          src="mitaobhook.png" // Placeholder for the KFC Mitao Bhook logo
          alt="KFC Mitao Bhook"
          style={logoStyle}
        />
        <p style={textStyle}>
          KFC’s pledge to give back to society. Over the years we have made it our mission to spread the message of hope, bringing positive change in the lives of people and providing better living standards. Mitao Bhook strengthens the community on the pillars of Education, Inclusion & Diversity.
        </p>
      </div>
    </div>
  );
};

export default KFCMitaoBhook;
