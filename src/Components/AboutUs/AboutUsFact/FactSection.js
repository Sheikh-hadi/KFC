import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStore, faHandshake, faUsers } from '@fortawesome/free-solid-svg-icons';

const FactSection = () => {
  const iconStyle = { fontSize: '4rem', color: '#E71D1D' };
  const factStyle = { textAlign: 'center', color: '#ffffff', marginBottom: '2rem' };
  const headingStyle = { fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', color: '#ffffff' };

  return (
    <div style={{ backgroundColor: '#1C1C1C', padding: '2rem 0' }}>
      <div className="container">
        <h2 style={headingStyle} className="text-left">Fast Facts about KFC Pakistan</h2>
        <div className="row">
          <div className="col-md-3" style={factStyle}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} />
            <h3 style={{ fontSize: '2rem', color: '#ffffff', margin: '1rem 0' }}>1997</h3>
            <p>The first KFC restaurant in Pakistan opened in 1997 and was located in Gulshan-e-Iqbal Karachi</p>
          </div>
          <div className="col-md-3" style={factStyle}>
            <FontAwesomeIcon icon={faStore} style={iconStyle} />
            <h3 style={{ fontSize: '2rem', color: '#ffffff', margin: '1rem 0' }}>128</h3>
            <p>Today KFC has grown to over 128 restaurants across the country</p>
          </div>
          <div className="col-md-3" style={factStyle}>
            <FontAwesomeIcon icon={faHandshake} style={iconStyle} />
            <h3 style={{ fontSize: '2rem', color: '#ffffff', margin: '1rem 0' }}>9</h3>
            <p>Giving back to the community, KFC runs 9 restaurants operated by deaf, Hearing With Heart team members</p>
          </div>
          <div className="col-md-3" style={factStyle}>
            <FontAwesomeIcon icon={faUsers} style={iconStyle} />
            <h3 style={{ fontSize: '2rem', color: '#ffffff', margin: '1rem 0' }}>9000+</h3>
            <p>Our Finger Lickin’ Chicken is brought to you by the hard work of a team of 9000+ people across Pakistan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactSection;
