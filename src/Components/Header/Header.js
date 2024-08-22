import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Font Awesome Icons

const Header = () => {
  return (
    <div style={{ backgroundColor: '#000', padding: '10px 0' }}>
      <div className="container mx-auto">
        <div className="row align-items-center">
          {/* Left Column - Menu Icon, KFC Heading, Delivery, Pickup */}
          <div className="col-md-9 d-flex align-items-center justify-content-between">
            {/* Menu Icon and KFC Heading */}
            <div className="d-flex align-items-center">
              <FontAwesomeIcon 
                icon={faBars} 
                style={{ color: '#fff', fontSize: '24px', cursor: 'pointer', marginRight: '1rem' }} 
              />
              <h1 style={{ color: '#dc3545', margin: 0 }}>KFC</h1>
            </div>

            {/* Navigation Links */}
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '2rem' }}>
              <a href="/" 
                style={{ 
                  margin: '0 10px', 
                  textDecoration: 'none', 
                  color: '#fff', 
                  fontFamily: '"DM Sans", Sans-serif', 
                  fontSize: '15px', 
                  fontWeight: 600, 
                  lineHeight: '1.3em' 
                }}
              >
                Home
              </a>
              <a href="/about" 
                style={{ 
                  margin: '0 10px', 
                  textDecoration: 'none', 
                  color: '#fff', 
                  fontFamily: '"DM Sans", Sans-serif', 
                  fontSize: '15px', 
                  fontWeight: 600, 
                  lineHeight: '1.3em' 
                }}
              >
                About Us
              </a>
              <a href="/FeedbackForm" 
                style={{ 
                  margin: '0 10px', 
                  textDecoration: 'none', 
                  color: '#fff', 
                  fontFamily: '"DM Sans", Sans-serif', 
                  fontSize: '15px', 
                  fontWeight: 600, 
                  lineHeight: '1.3em' 
                }}
              >
               Feedback Form
              </a>
            </div>

            {/* Buttons for larger screens */}
            <div className="d-none d-md-flex align-items-center">
              <button 
                className="btn btn-outline-danger d-flex align-items-center me-2"
                style={{ color: '#fff', borderColor: '#dc3545' }}
              >
                <img src='./Delivery.png' alt="Delivery" style={{ width: '20px', marginRight: '0.5rem' }} />
                DELIVERY
              </button>
              <button 
                className="btn btn-outline-danger d-flex align-items-center"
                style={{ color: '#fff', borderColor: '#dc3545' }}
              >
                <img src='./Pickup.png' alt="Pickup" style={{ width: '20px', marginRight: '0.5rem' }} />
                Pickup
              </button>
            </div>
          </div>

          {/* Right Column - Cart, Login */}
          <div className="col-md-3 d-flex justify-content-end align-items-center">
            <div className="d-none d-md-flex align-items-center">
              <FontAwesomeIcon 
                icon={faShoppingCart} 
                style={{ color: '#fff', fontSize: '20px', marginRight: '0.5rem' }} 
              />
              <span style={{ color: '#fff' }}>0</span>
            </div>
            <div className="d-none d-md-block ms-2">
              <button className="btn btn-danger">LOGIN</button>
            </div>
          </div>
        </div>

        {/* Responsive Adjustments */}
        <div className="d-md-none text-center mt-2">
          <div className="d-flex justify-content-center mb-2">
            <button 
              className="btn btn-outline-danger d-flex align-items-center me-2"
              style={{ color: '#fff', borderColor: '#dc3545' }}
            >
              <img src='./Delivery.png' alt="Delivery" style={{ width: '20px', marginRight: '0.5rem' }} />
              DELIVERY
            </button>
            <button 
              className="btn btn-outline-danger d-flex align-items-center"
              style={{ color: '#fff', borderColor: '#dc3545' }}
            >
              <img src='./Pickup.png' alt="Pickup" style={{ width: '20px', marginRight: '0.5rem' }} />
              Pickup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
