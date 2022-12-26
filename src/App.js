import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/home/Home";
import Wishlist from "./components/pages/wishlist/Wishlist";
import Basket from "./components/pages/basket/Basket";
import DetailPage from "./components/pages/detailpage";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/wishlist"} element={<Wishlist/>}/>
            <Route path={"/basket"} element={<Basket/>}/>
            <Route path={"/products/detail-page/:productsId"} element={<DetailPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
