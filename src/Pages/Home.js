import React from "react";
import ExploreMenu from "./../Components/ExploreMenu/ExploreMenu";
import Choice from "../Components/BestSeller/Choice";
import HeaderButtonList from "./../Components/HeaderButtonList/HeaderButtonList";
import TopDeal from "../Components/TopDeals/TopDeal";
import Category from "../Components/Category/Category";

const Home = () => {
  return (
    <div>
      <HeaderButtonList text={"skana"} />
      <Category />
      <TopDeal />
      <Choice />
      <ExploreMenu />
    </div>
  );
};

export default Home;
