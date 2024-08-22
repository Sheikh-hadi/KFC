import React from 'react'; // Import React library
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'; // Import specific FontAwesome icon

const FeedbackForm = () => {
  return (
    <div style={{  minHeight: '100vh', padding: '2rem 0' }}>
      {/* Main container with  full viewport height, and padding */}
      <div className="container ">
        {/* Bootstrap container class for responsive fixed-width layout and text alignment */}
        
        {/* Heading section */}
        <h2 style={{ color: '#fff', fontWeight: 'bold',textAlign: 'center' }}>
          Have Some Feedback To Share?
        </h2>
        {/* Main heading with white color and bold font weight */}
        
        <h3 style={{ color: '#ea002a', fontWeight: '700', fontSize: '25px',textAlign: 'center'  }}>
          Well, you've come to the right place!
        </h3>
        {/* Subheading with red color, bold font weight, and larger font size */}
        
        <p style={{ color: '#fff' ,alignItems: 'center' }}>
          Fill in the sections below and we'll be in touch soon, or if you want to contact a specific store, visit our locations page for store contact details. * indicates a required answer
        </p>
        {/* Paragraph with white color, explaining the form details */}
        
        <div className="row mt-5">
          {/* Bootstrap row for horizontal alignment of columns with top margin */}
          
          {/* Contact Details Section */}
          <div className="col-md-6 mb-4">
            {/* Bootstrap column taking half the width on medium screens with bottom margin */}
            <div style={{ backgroundColor: '#1C1C1C', borderRadius: '8px', padding: '1rem' }}>
              {/* Container with dark background, rounded corners, and padding */}
              
              <h4 style={{ color: '#fff', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'left' }}>
                Contact Details
              </h4>
              {/* Section heading with white color, bold font weight, and left-aligned text */}
              
              <div className=""style={{ display: 'flex', gap: '1rem' }}>
                {/* Flex container for horizontal layout with gap between items */}
                
                <div className="mb-3" style={{ flex: 1 }}>
                  {/* Bootstrap margin-bottom class and flex-grow style for input field */}
                  <label style={{ color: '#fff', fontWeight: 'bold', textAlign: 'left' }}>
                    FULL NAME *
                  </label>
                  {/* Label for full name with white color, bold font weight, and left-aligned text */}
                  <input type="text" className="form-control" style={{ backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px' }} />
                  {/* Text input field with dark background, white text, no border, and rounded corners */}
                </div>
                
                <div className="mb-3" style={{ flex: 1 }}>
                  {/* Bootstrap margin-bottom class and flex-grow style for input field */}
                  <label style={{ color: '#fff', fontWeight: 'bold', textAlign: 'left' }}>
                    PHONE NUMBER (3XXXXXXXXXX) *
                  </label>
                  {/* Label for phone number with white color, bold font weight, and left-aligned text */}
                  <div className="input-group">
                    {/* Bootstrap input group for combining input fields */}
                    <span className="input-group-text" style={{ backgroundColor: '#333', color: '#fff', border: 'none' }}>
                      +92
                    </span>
                    {/* Input group text with dark background, white text, and no border */}
                    <input type="text" className="form-control" style={{ backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px' }} />
                    {/* Text input field with dark background, white text, no border, and rounded corners */}
                  </div>
                </div>
              </div>
              
              <div className="mb-3">
                {/* Bootstrap margin-bottom class for spacing */}
                <label style={{ color: '#fff', fontWeight: 'bold' }}>
                  EMAIL *
                </label>
                {/* Label for email with white color and bold font weight */}
                <input type="email" className="form-control" style={{ backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px' }} />
                {/* Email input field with dark background, white text, no border, and rounded corners */}
              </div>
              
              <div className="mb-3">
                {/* Bootstrap margin-bottom class for spacing */}
                <label style={{ color: '#fff', fontWeight: 'bold' }}>
                  ORDER ID *
                </label>
                {/* Label for order ID with white color and bold font weight */}
                <input type="text" className="form-control" style={{ backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px' }} />
                {/* Text input field for order ID with dark background, white text, no border, and rounded corners */}
              </div>
              
              <div className="mb-3">
                {/* Bootstrap margin-bottom class for spacing */}
                <label style={{ color: '#fff', fontWeight: 'bold' }}>
                  FEEDBACK CHANNEL *
                </label>
                {/* Label for feedback channel with white color and bold font weight */}
                <select className="form-select" style={{ backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px' }}>
                  <option>Choose...</option>
                  {/* Dropdown select field with dark background, white text, no border, and rounded corners */}
                </select>
              </div>
            </div>
          </div>
          
          {/* About Your Visit Section */}
          <div className="col-md-6 mb-4">
            {/* Bootstrap column taking half the width on medium screens with bottom margin */}
            <div style={{ backgroundColor: '#1C1C1C', borderRadius: '8px', padding: '1rem' }}>
              {/* Container with dark background, rounded corners, and padding */}
              
              <h4 style={{ color: '#fff', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'left' }}>
                About Your Visit
              </h4>
              {/* Section heading with white color, bold font weight, and left-aligned text */}
              
              <div className="mb-3">
                {/* Bootstrap margin-bottom class for spacing */}
                <label style={{ color: '#fff', fontWeight: 'bold' }}>
                  SELECT STORE
                </label>
                {/* Label for selecting a store with white color and bold font weight */}
                <select className="form-select" style={{ backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px' }}>
                  <option>Choose...</option>
                  {/* Dropdown select field with dark background, white text, no border, and rounded corners */}
                </select>
              </div>
              
              <div className="mb-3">
                {/* Bootstrap margin-bottom class for spacing */}
                <label style={{ color: '#fff', fontWeight: 'bold' }}>
                  DATE *
                </label>
                {/* Label for date with white color and bold font weight */}
                <div className="input-group">
                  {/* Bootstrap input group for combining input fields */}
                  <input type="text" className="form-control" placeholder="DD MM YYYY" style={{ backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px' }} />
                  {/* Text input field with placeholder for date, dark background, white text, no border, and rounded corners */}
                  <span className="input-group-text" style={{ backgroundColor: '#333', color: '#ff0000', border: 'none' }}>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                  </span>
                  {/* Icon with dark background, red color, and no border */}
                </div>
              </div>
              
              <div className="mb-3">
                {/* Bootstrap margin-bottom class for spacing */}
                <label style={{ color: '#fff', fontWeight: 'bold' }}>
                  FEEDBACK TYPE *
                </label>
                {/* Label for feedback type with white color and bold font weight */}
                <select className="form-select" style={{ backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px' }}>
                  <option>Choose...</option>
                  {/* Dropdown select field with dark background, white text, no border, and rounded corners */}
                </select>
              </div>
              
              <div className="mb-3">
                {/* Bootstrap margin-bottom class for spacing */}
                <label style={{ color: '#fff', fontWeight: 'bold' }}>
                  FEEDBACK *
                </label>
                {/* Label for feedback with white color and bold font weight */}
                <textarea className="form-control" rows="4" style={{ backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px' }}></textarea>
                {/* Textarea field for feedback with dark background, white text, no border, and rounded corners */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <button type="submit" className="btn btn-danger" style={{ padding: '0.5rem 2rem' }}>
          SUBMIT
        </button>
        {/* Submit button with red background, padding, and white text */}
      </div>
    </div>
  );
};

export default FeedbackForm; // Export the FeedbackForm component
