import React from 'react'
import ExploreMenu from './../Components/ExploreMenu/ExploreMenu';
import Choice from '../Components/BestSeller/Choice';
import HeaderButtonList from './../Components/HeaderButtonList/HeaderButtonList';
import TopDeal from '../Components/TopDeals/TopDeal';

const Home = () => {
  return (
    <div> 
        <HeaderButtonList/>
        <TopDeal/>
          <Choice/>
    <ExploreMenu/>
 
    </div>
  )
}

export default Home

