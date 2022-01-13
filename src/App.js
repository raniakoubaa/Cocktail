
import './App.css';
import Home from './page';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import CocktailList from './component/CocktailList';
import Header from './component/Header';



function App() {
  return (
    <div className="App">
   <Router>
     <Header/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/cocktail" element={<CocktailList/>}/>
     </Routes>
   </Router>
    {/* <Home/> */}
    </div>
  );
}

export default App;
