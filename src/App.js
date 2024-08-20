import './App.css';
import Choice from './Components/BestSeller/Choice';
import Category from './Components/Category/Category';
import ExploreMenu from './Components/ExploreMenu/ExploreMenu';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import TopDeals from './Components/TopDeals/TopDeals';

function App() {
  return (
    <div className="App">
      <Header/>
      <Category/>
      <List/>
      <ExploreMenu/>
      <Choice/>
      <TopDeals/>
      <Footer/>
    </div>
  );
}

export default App;
