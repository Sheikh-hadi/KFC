import React, { useState, useEffect } from "react"; // Import React and hooks for state and effect
import productList from "../../Model/menuTopDealModel.js";
import NavBar from '../List/List.js'; // Import the NavBar component for category selection

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState(null); // State to track the currently selected category
    const [filteredItems, setFilteredItems] = useState(productList); // State to store the filtered list of items based on selected category

    useEffect(() => {
        if (selectedCategory) {
            // If a category is selected, filter the product list based on the category
            const filtered = productList.filter(item => item.category === selectedCategory);
            setFilteredItems(filtered); // Update the state with the filtered items
        } else {
            setFilteredItems(productList); // If no category is selected, show all products
        }
    }, [selectedCategory]); // Re-run the effect whenever the selected category changes

    return (
        <div>
            <NavBar onCategoryClick={setSelectedCategory} /> {/* Render the NavBar and pass the setSelectedCategory function */}
            <div className="items-container">
                {/* Map over the filtered items and render each item */}
                {filteredItems.map((item, idx) => (
                    <div key={idx} className="item">
                        <img src={item.imageSrc} alt={item.title} /> {/* Display the product image */}
                        <p>{item.title}</p> {/* Display the product title */}
                        <p>{item.description}</p> {/* Display the product description */}
                        <p>Price: {item.price}</p> {/* Display the product price */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category; // Export the Category component
