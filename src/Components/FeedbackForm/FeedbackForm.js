import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const FeedbackForm = () => {
  // Common styles
  const containerStyle = { backgroundColor: '#1C1C1C', padding: '2rem', borderRadius: '10px' };
  const headingStyle = { color: '#ffffff', fontWeight: 'bold', marginBottom: '1rem' };
  const inputStyle = {
    backgroundColor: '#333333',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    padding: '0.5rem',
    width: '100%',
  };
  const labelStyle = { color: '#ffffff', marginBottom: '0.5rem', display: 'block' };
  const buttonStyle = { backgroundColor: '#800000', color: '#ffffff', padding: '0.75rem 2rem', border: 'none', borderRadius: '5px', marginTop: '1rem' };

  return (
    <div className="container">
      <h2 className="text-center" style={{ color: '#ffffff', fontWeight: 'bold' }}>
        Have Some Feedback To Share?
      </h2>
      <p className="text-center" style={{ color: '#ff0000' }}>
        Well, you've come to the right place!
      </p>
      <p className="text-center" style={{ color: '#ffffff' }}>
        Fill in the sections below and we'll be in touch soon, or if you want to contact a specific store,
        visit our locations page for store contact details. * indicates a required answer
      </p>

      <div className="row">
        {/* Contact Details Section */}
        <div className="col-md-6">
          <div style={containerStyle}>
            <h3 style={headingStyle}>Contact Details</h3>
            <div className="form-group">
              <label style={labelStyle}>FULL NAME *</label>
              <input type="text" style={inputStyle} />
            </div>
            <div className="form-group">
              <label style={labelStyle}>PHONE NUMBER (3XXXXXXXXXX) *</label>
              <div className="input-group">
                <span className="input-group-text" style={{ backgroundColor: '#333333', color: '#ffffff', border: 'none' }}>+92</span>
                <input type="text" style={inputStyle} />
              </div>
            </div>
            <div className="form-group">
              <label style={labelStyle}>EMAIL *</label>
              <input type="email" style={inputStyle} />
            </div>
            <div className="form-group">
              <label style={labelStyle}>ORDER ID *</label>
              <input type="text" style={inputStyle} />
            </div>
            <div className="form-group">
              <label style={labelStyle}>FEEDBACK CHANNEL *</label>
              <input type="text" style={inputStyle} />
            </div>
          </div>
        </div>

        {/* About Your Visit Section */}
        <div className="col-md-6">
          <div style={containerStyle}>
            <h3 style={headingStyle}>About Your Visit</h3>
            <div className="form-group">
              <label style={labelStyle}>SELECT STORE</label>
              <select style={inputStyle}>
                <option>Select Store</option>
              </select>
            </div>
            <div className="form-group">
              <label style={labelStyle}>DATE *</label>
              <div className="input-group">
                <input type="text" style={inputStyle} placeholder="DD MM YYYY" />
                <span className="input-group-text" style={{ backgroundColor: '#333333', border: 'none' }}>
                  <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#ff0000' }} />
                </span>
              </div>
            </div>
            <div className="form-group">
              <label style={labelStyle}>FEEDBACK TYPE *</label>
              <select style={inputStyle}>
                <option>Select Feedback Type</option>
              </select>
            </div>
            <div className="form-group">
              <textarea rows="4" style={{ ...inputStyle, resize: 'none' }} placeholder="ENTER YOUR MESSAGE"></textarea>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button style={buttonStyle}>SUBMIT</button>
      </div>
    </div>
  );
};

export default FeedbackForm;
