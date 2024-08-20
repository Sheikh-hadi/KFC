import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Font Awesome Icons

const Header = () => {
  return (
    <div className="bg-black py-2">
      <div className="container mx-auto">
        <div className="row align-items-center">
          {/* Left Column - Menu Icon, KFC Heading, Delivery, Pickup */}
          <div className="col-md-9 d-flex align-items-center justify-content-between">
            {/* Menu Icon and KFC Heading */}
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faBars} style={{ color: '#fff', fontSize: '24px', cursor: 'pointer', marginRight: '1rem' }} />
              <h1 className="text-danger m-0">KFC</h1>
            </div>

            {/* Buttons for larger screens */}
            <div className="d-none d-md-flex align-items-center">
              <button className="btn btn-outline-danger d-flex align-items-center me-2">
                <img src='./Delivery.png' alt="Delivery" className="me-2" style={{ width: '20px' }} />
                DELIVERY
              </button>

              <button className="btn btn-outline-danger d-flex align-items-center">
                <img src='./Pickup.png' alt="Pickup" className="me-2" style={{ width: '20px' }} />
                Pickup
              </button>
            </div>
          </div>

          {/* Right Column - Cart, Login */}
          <div className="col-md-3 d-flex justify-content-end align-items-center">
            <div className="d-none d-md-flex align-items-center">
              {/* Cart Icon */}
              <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#fff', fontSize: '20px', marginRight: '0.5rem' }} />
              <span style={{ color: '#fff' }}>0</span>
            </div>

            <div className="d-none d-md-block ms-2">
              {/* Login Button */}
              <button className="btn btn-danger">LOGIN</button>
            </div>
          </div>
        </div>

        {/* Responsive Adjustments */}
        <div className="d-md-none text-center mt-2">
          <div className="d-flex justify-content-center mb-2">
            {/* <FontAwesomeIcon icon={faBars} style={{ color: '#fff', fontSize: '24px', cursor: 'pointer', marginRight: '1rem' }} /> */}
            {/* <h1 className="text-danger m-0">KFC</h1> */}
          </div>

          <div className="d-flex justify-content-center mb-2">
            <button className="btn btn-outline-danger d-flex align-items-center me-2">
              <img src='./Delivery.png' alt="Delivery" className="me-2" style={{ width: '20px' }} />
              DELIVERY
            </button>
            <button className="btn btn-outline-danger d-flex align-items-center">
              <img src='./Pickup.png' alt="Pickup" className="me-2" style={{ width: '20px' }} />
              Pickup
            </button>
          </div>

          <div className="d-flex justify-content-center mb-2">
            {/* Cart Icon */}
            {/* <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#fff', fontSize: '20px', marginRight: '0.5rem' }} />
            <span style={{ color: '#fff' }}>0</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
