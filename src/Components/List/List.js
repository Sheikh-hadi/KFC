import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import categoryList from '../../Model/categoryModel';
const NavBar = ({ onCategoryClick }) => {
  console.log('onCategoryClick:', onCategoryClick); // Verify the prop is passed correctly
 
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (button) => {
    setClickedButton(button);
    if (onCategoryClick) {
      onCategoryClick(button); // Ensure this line is executed
    } else {
      console.error("onCategoryClick is not a function");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        {categoryList.map((button, index) => (
          <div className="col-12 col-md-auto mb-2" key={index}>
            <button
              className="btn btn-block"
              style={{
                ...styles.button,
                backgroundColor: clickedButton === button ? 'red' : '#000'
              }}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};


const styles = {
    button: {
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        width: '100%',
        textAlign: 'center',
    }
};

export default NavBar;
