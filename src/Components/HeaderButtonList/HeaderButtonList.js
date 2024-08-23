import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import categoryList from '../../Model/categoryModel'; // Adjust path as needed

const HeaderButtonList = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (button) => {
    setClickedButton(button);
    // Perform actions here if needed
  };

  return (
    <div className="bg-black mt-4">
      <div className="row justify-content-center">
        {categoryList.map((item, index) => (
          <div className="col-12 col-md-auto mb-2" key={index}>
            <button
              className="btn btn-block"
              style={{
                ...styles.button,
                backgroundColor: clickedButton === item.value ? 'red' : '#000'
              }}
              onClick={() => handleButtonClick(item.value)}
            >
             <a href={item.id}> {item.value}</a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  button: {
    marginTop: '20px',
    color: '#fff',
    backgroundColor: '#1c1816',
    padding: '10px 20px',
    border: '1px solid white',
    borderRadius: '5px',
    width: '100%',
    textAlign: 'center',
  }
};

export default HeaderButtonList;
