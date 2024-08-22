import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import factItem from '../../../Model/factItem'; // Import the array from the Model folder

// Rename the component to avoid conflicts
const FactItem = ({ icon, title, description }) => (
  <div className="col-md-3 text-center text-white mb-4">
    <FontAwesomeIcon icon={icon} style={{ fontSize: '4rem', color: '#E71D1D' }} />
    <h3 style={{ fontSize: '2rem', margin: '1rem 0' }}>{title}</h3>
    <p>{description}</p>
  </div>
);

const FactSection = ({ facts = factItem, heading }) => (
  <div style={{ backgroundColor: '#1C1C1C', padding: '2rem 0' }}>
    <div className="container">
      <h2 className="text-left text-white mb-4">{heading}</h2>
      <div className="row">
        {facts.map((fact, index) => (
          <FactItem
            key={index}
            icon={fact.icon}
            title={fact.title}
            description={fact.description}
          />
        ))}
      </div>
    </div>
  </div>
);

export default FactSection; // Export the FactSection component for use in other files
