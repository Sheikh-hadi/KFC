import './App.css';
import AboutUsIntro from './Components/AboutUs/AboutUsIntro';
import Choice from './Components/BestSeller/Choice';
import Category from './Components/Category/Category';
import ExploreMenu from './Components/ExploreMenu/ExploreMenu';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HeaderButtonList from './Components/HeaderButtonList/HeaderButtonList';
import TopDeals from './Components/TopDeals/TopDeals';

function App() {
  return (
    <div className="App">
      <Header/>  <ExploreMenu/>
       <HeaderButtonList/>
      <Category/>
    
      <Choice/>
      <TopDeals/>
      <AboutUsIntro/>
      <Footer/>
    </div>
  );
}

export default App;
