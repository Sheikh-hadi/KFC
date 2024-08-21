import React from 'react';
import Basket from './Basket';

const Timeline = () => {
  return (
    <div style={{ 
      backgroundColor: '#000', 
      padding: '50px', 
      color: '#fff'
    }}>
      <h1 style={{ 
        marginBottom: '40px', 
       
        fontWeight: 'bold',
        // textAlign: 'left'
      }}>The Story of World's Best Chicken</h1>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}>
        <Basket 
          year="1890" 
          title="Harland Sanders was born" 
          description="Harland Sanders was born"
          showArrow={true}
        />
        <Basket 
          year="1930" 
          title="Sanders Court & Cafe" 
          description="Sanders Court & Cafe was opened in front of his gas station in Corbin Kentucky"
          showArrow={true}
        />
        <Basket 
          year="1940" 
          title="Original Recipe" 
          description="Colonel Sanders develops the Original Recipe from 11 secret herbs and spices"
          showArrow={true}
        />
        <Basket 
          year="1952" 
          title="Franchising Begins" 
          description="The Colonel begins franchising his business travelling from town to town and cooking for restaurant owners"
          showArrow={true}
        />
        <Basket 
          year="1957" 
          title="Buckets Introduced" 
          description="Kentucky Fried Chicken is first sold in buckets"
          showArrow={true}
        />
        <Basket 
          year="1964" 
          title="600 Outlets" 
          description="More than 600 franchised outlets in the USA, Canada, and UK"
          showArrow={true}
        />
        <Basket 
          year="1974" 
          title="KFC in Kuwait" 
          description="KFC first launches in Kuwait"
          showArrow={true}
        />
        <Basket 
          year="1980" 
          title="Colonel Passes Away" 
          description="Colonel Sanders passes away at the age of 90. His legacy lives on."
          showArrow={true}
        />
        <Basket 
          year="Today" 
          title="KFC Worldwide" 
          description="Today we have more than 25,000 KFC restaurants in over 145 countries and territories around the world."
          showArrow={false}
        />
      </div>
    </div>
  );
}

export default Timeline;
