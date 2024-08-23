import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import contactData from '../../Model/contactData'; // Corrected path

const ContactCard = () => {
  return (
    <div className="container" style={{marginTop:'100px' }}>
      <h2 style={{ color: '#fff', textAlign: 'center' }}>Contact Us</h2>
      <div className="row"style={{ padding: '10px 0',marginBottom:'100px' ,fontWeight:"700" }}>
        {contactData.map((contact, index) => (
          <div key={index} className="col-md-4">
            <div className="card bg-dark text-white mb-4" style={{ height: '100%', minHeight: '200px' }}>
              <div className="card-body">
              <h5 className="card-title">
  <i className="fas fa-phone-alt" style={{color: '#ea002a'}}></i> {contact.office}
</h5>

                <p className="card-text">
                  {contact.phone}
                </p>
                <p className="card-text" style={{ display: 'flex', alignItems: 'center' }}>
  <i className="fas fa-map-marker-alt" style={{ color: '#ea002a', marginRight: '8px' }}></i>
  <h4 style={{ fontSize: '17px', margin: '0' }}>Location:</h4>
</p>
<p style={{ margin: '0' }}>{contact.location}</p>


                {contact.email && (
                  <p className="card-text">
                    <strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-white">{contact.email}</a>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
