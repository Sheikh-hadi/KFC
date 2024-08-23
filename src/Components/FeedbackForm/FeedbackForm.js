import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';

const FeedbackForm = () => {
  const [focusedInput, setFocusedInput] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    orderId: '',
    feedbackChannel: '',
    selectStore: '',
    date: '',
    feedbackType: '',
    feedback: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Form Data:', formData); // Log form data to console
    // Here you can also add code to send form data to a server or perform other actions
  };

  return (
    <form onSubmit={handleSubmit}> {/* Add form tag with onSubmit handler */}
      <Row className="text-center mt-5 mb-4">
        <Col>
          <h1 style={{ color: 'white', fontSize: '30px' }}>Have some Feedback to share</h1>
          <h2 style={{ color: '#ea002a', fontSize: '25px' }}>Well, you’ve come to the right place!</h2>
          <p style={{ color: 'white', padding: '0 27%' }}>
            Fill in the sections below and we'll be in touch soon, or if you want
            to contact a specific store, visit our locations page for store
            contact details. * indicates a required answer
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6} lg={5} className="mb-3">
          <div style={{ backgroundColor: '#1C1C1C', borderRadius: '8px', padding: '1.5rem', height: '450px' }}>
            <h4 style={{ color: '#fff', fontWeight: 'bold', marginBottom: '1rem' }}>Contact Details</h4>
            <Row className="mb-3">
              <Col>
                <label style={{ color: '#fff', fontWeight: 'bold', marginBottom: '10px' }}>FULL NAME *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  className="form-control"
                  style={{
                    backgroundColor: '#333',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    borderBottom: focusedInput === 'fullName' ? '2px solid #ea002a' : '1px solid #fff',
                    padding: '0.5rem 1rem',
                  }}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('fullName')}
                  onBlur={() => setFocusedInput('')}
                />
              </Col>
              <Col>
                <label style={{ color: '#fff', fontWeight: 'bold', marginBottom: '10px' }}>PHONE NUMBER (3XXXXXXXXXX) *</label>
                <div className="input-group">
                  <span
                    className="input-group-text"
                    style={{
                      backgroundColor: '#333',
                      color: '#fff',
                      border: 'none',
                      borderBottom: focusedInput === 'phoneNumber' ? '2px solid #ea002a' : '1px solid #fff',
                      padding: '0.5rem 1rem',
                    }}
                    onFocus={() => setFocusedInput('phoneNumber')}
                    onBlur={() => setFocusedInput('')}
                  >
                    +92
                  </span>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    className="form-control"
                    style={{
                      backgroundColor: '#333',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      borderBottom: focusedInput === 'phoneNumber' ? '2px solid #ea002a' : '1px solid #fff',
                      padding: '0.5rem 1rem',
                    }}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput('phoneNumber')}
                    onBlur={() => setFocusedInput('')}
                  />
                </div>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <label style={{ color: '#fff', fontWeight: 'bold', marginBottom: '10px' }}>EMAIL *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  className="form-control"
                  style={{
                    backgroundColor: '#333',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    borderBottom: focusedInput === 'email' ? '2px solid #ea002a' : '1px solid #fff',
                    padding: '0.5rem 1rem',
                  }}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput('')}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <label style={{ color: '#fff', fontWeight: 'bold', marginBottom: '10px' }}>ORDER ID *</label>
                <input
                  type="text"
                  name="orderId"
                  value={formData.orderId}
                  className="form-control"
                  style={{
                    backgroundColor: '#333',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    borderBottom: focusedInput === 'orderId' ? '2px solid #ea002a' : '1px solid #fff',
                    padding: '0.5rem 1rem',
                  }}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('orderId')}
                  onBlur={() => setFocusedInput('')}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <label style={{ color: '#fff', fontWeight: 'bold', marginBottom: '10px' }}>FEEDBACK CHANNEL *</label>
                <select
                  name="feedbackChannel"
                  value={formData.feedbackChannel}
                  className="form-select"
                  style={{
                    backgroundColor: '#333',
                    color: '#fff',
                    border: 'none',
                    borderBottom: focusedInput === 'feedbackChannel' ? '2px solid #ea002a' : '1px solid #fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                  }}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('feedbackChannel')}
                  onBlur={() => setFocusedInput('')}
                >
                  <option>Dine In</option>
                  <option>Take away</option>
                  <option>Delivery</option>
                  <option>Pick Up</option>
                </select>
              </Col>
            </Row>
          </div>
        </Col>

        <Col md={6} lg={5}>
          <div style={{ backgroundColor: '#1C1C1C', borderRadius: '8px', padding: '1rem' }}>
            <h4 style={{ color: '#fff', fontWeight: 'bold', marginBottom: '1rem' }}>About Your Visit</h4>
            <Row className="mb-3">
              <Col>
                <label style={{ color: '#fff', fontWeight: 'bold', marginBottom: '10px' }}>SELECT STORE</label>
                <select
                  name="selectStore"
                  value={formData.selectStore}
                  className="form-select"
                  style={{
                    backgroundColor: '#333',
                    color: '#fff',
                    border: 'none',
                    borderBottom: focusedInput === 'selectStore' ? '2px solid #ea002a' : '1px solid #fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                  }}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('selectStore')}
                  onBlur={() => setFocusedInput('')}
                >
                  <option>Lahore</option>
                  <option>Karachi</option>
                  <option>Islamabad</option>
                  <option>Multan</option>
                </select>
              </Col>
              <Col>
                <label style={{ color: '#fff', fontWeight: 'bold', marginBottom: '10px' }}>DATE *</label>
                <div className="input-group">
                  <input
                    type="date"
                    placeholder="DD MM YYYY"
                    style={{
                      backgroundColor: '#333',
                      color: '#fff',
                      border: 'none',
                      borderBottom: focusedInput === 'date' ? '2px solid #ea002a' : '1px solid #fff',
                      borderRadius: '4px',
                      padding: '0.5rem 1rem',
                      width: '100%',
                      fontSize: '1rem',
                      outline: 'none',
                    }}
                    onFocus={() => setFocusedInput('date')}
                    onBlur={() => setFocusedInput('')}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      right: '12px',
                      color: '#ff0000',
                      fontSize: '1.5rem',
                      pointerEvents: 'none',
                    }}
                  >
                    <FontAwesomeIcon icon={faCalendarAlt} />
                  </span>
                </div>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <label style={{ color: '#fff', fontWeight: 'bold', marginBottom: '10px' }}>FEEDBACK TYPE</label>
                <select
                  name="feedbackType"
                  value={formData.feedbackType}
                  className="form-select"
                  style={{
                    backgroundColor: '#333',
                    color: '#fff',
                    border: 'none',
                    borderBottom: focusedInput === 'feedbackType' ? '2px solid #ea002a' : '1px solid #fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                  }}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('feedbackType')}
                  onBlur={() => setFocusedInput('')}
                >
                  <option>Compliment</option>
                  <option>Complaint</option>
                  <option>Suggestion</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <label style={{ color: '#fff', fontWeight: 'bold', marginBottom: '10px' }}>FEEDBACK *</label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  className="form-control"
                  rows="6"
                  style={{
                    backgroundColor: '#333',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    borderBottom: focusedInput === 'feedback' ? '2px solid #ea002a' : '1px solid #fff',
                    padding: '0.5rem 1rem',
                  }}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('feedback')}
                  onBlur={() => setFocusedInput('')}
                />
              </Col>
            </Row>
         
          </div>
        </Col>     <Row className="justify-content-center mt-3 mb-5">
        <Col xs="auto">
          <button
            type="submit"
            className="btn btn-danger"
            style={{ padding: '0.5rem 2rem' }}
          >
            SUBMIT
          </button>
        </Col>
      </Row>
      </Row>
    </form>
  );
};

export default FeedbackForm;
