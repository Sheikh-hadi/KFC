import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUsIntro from './Components/AboutUs/AboutUsIntro';
import Choice from './Components/BestSeller/Choice';
import Category from './Components/Category/Category';
import ExploreMenu from './Components/ExploreMenu/ExploreMenu';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HeaderButtonList from './Components/HeaderButtonList/HeaderButtonList';
import TopDeals from './Components/TopDeals/TopDeals';
import AboutUsHistorySection from './Components/AboutUs/AboutUsHistorySection';
import Timeline from './Components/AboutUs/AboutUsStory/Timeline';
import FactSection from './Components/AboutUs/AboutUsFact/FactSection';
import KFCPartnership from './Components/AboutUs/AboutUsPartnership/KFCPartnership';
import KFCMitaoBhook from './Components/AboutUs/KFCMitaoBhook';

function App() {
  return (
    <div className="App">
      <Header/> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <AboutUsIntro/>
              <AboutUsHistorySection/>
           <Timeline/>
           <FactSection/>
           <KFCMitaoBhook/>
           <KFCPartnership/>
              <ExploreMenu/>
              <HeaderButtonList/>
              <Category/>
              <Choice/>
              <TopDeals/>
              <AboutUsIntro/>
            </>
          } />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
