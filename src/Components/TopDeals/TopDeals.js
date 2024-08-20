import React from "react";
import TopDeal from "./TopDeal";
import productList from "../../Model/menuTopDealModel"; // Adjust the path accordingly

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
      {productList.map((deal, index) => (
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
