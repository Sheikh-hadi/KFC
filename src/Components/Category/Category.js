import React from "react";
import categoryList from "../../Model/categoryModel";
import productList from "../../Model/productModel";
import Choices from "../BestSeller/Choices";

const Category = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      {categoryList.map((item, index) => {
        // Filter the products based on the current category
        const filterProducts = productList.filter(
          (product) => product.categoryId === item.id
        );

        return (
          <div key={index}>
            {/* "Top Deals" Button */}
            <h2
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "20px",
                display: "block",
                width: "100%",
              }}
            >
              {item.value.toLocaleUpperCase()}
            </h2>

            {/* Red Underline */}
            <div
              style={{
                width: "50px",
                height: "2px",
                backgroundColor: "#e4002b",
                margin: "10px 0",
              }}
            ></div>

            {/* Render filtered products centered */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Choices filter={filterProducts} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
