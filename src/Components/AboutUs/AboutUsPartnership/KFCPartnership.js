
import React from 'react';
import PartnershipCard from './PartnershipCard';

const partnershipsData = [
  {
    logo: 'citizen.png',
    altText: 'The Citizens Foundation',
    description: 'Adopted 6 TCF schools since 2014 in Gadaap West, Muzaffargarh, Faisalabad, and Quetta, educating 1700+ students',
  },
  {
    logo: 'deaf.jpeg',
    altText: 'Deaf Reach',
    description: 'Proudly running the Deaf Reach KFC Campus and providing education and training to 340 deaf students',
  },
  {
    logo: 'orange.png',
    altText: 'Orange Tree Foundation',
    description: 'Sponsoring higher education of 200+ students across HEC recognized universities in Pakistan',
  },
  {
    logo: 'cyte.png',
    altText: 'Youth Tech Education Society',
    description: 'Supporting TEGS – KFC Campus to provide quality education to students in Lahore',
  },
];

const KFCPartnership = () => {
  return (
    <div style={{ backgroundColor: 'black', padding: '2rem 0' }}>
      <div className="container">
        <div className="row">
          {partnershipsData.map((partnership, index) => (
            <PartnershipCard
              key={index}
              logo={partnership.logo}
              altText={partnership.altText}
              description={partnership.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KFCPartnership;
