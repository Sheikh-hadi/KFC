import React from "react";
import TopDeal from "./TopDeal";
import categoryList from "../../Model/categoryModel";

const TopDeals = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "black",
    padding: "10px 0px",
  };

  return (
    <div style={containerStyle}>
      {categoryList.map((deal, index) => (
        <TopDeal
          key={index}
          imageSrc={deal.imageSrc}
          title={deal.title}
          description={deal.description}
          price={deal.price}
          addon={deal.addon}
        />
      ))}
    </div>
  );
};

export default TopDeals;
