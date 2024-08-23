import React from 'react';
import ContactCard from '../Components/Contact/ContactCard';
import ContactInfo from '../Components/Contact/ContactInfo';
import { contactItems } from '../data/contactData'; // Ensure the path is correct

const ContactUsPage = () => {
  return (
    <div>
      <ContactCard />
      {/* Pass contactItems as a prop to ContactInfo */}
      <ContactInfo contactItems={contactItems} />
    </div>
  );
};

export default ContactUsPage;
