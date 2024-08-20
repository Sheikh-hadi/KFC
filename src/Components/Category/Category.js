import React from "react";
import categoryList from "../../Model/categoryModel";
import productList from "../../Model/productModel";
import Choices from "../BestSeller/Choices";

const Category = () => {
  return (
    <div>
      {categoryList.map((item, index) => {
        const filterProducts = productList.filter(product => product.categoryId === item.id);
        console.log(filterProducts);

        return (
          <div key={index}>
            <h3>{item.value}</h3>
          
              <Choices filter={filterProducts} />
            )
          </div>
        );
      })}
    </div>
  );
};

export default Category;
