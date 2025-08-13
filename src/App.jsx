import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Cart from "./Pages/Cart/Cart";


function App(){
  return(
    <div className="app">
    <Navbar />

    <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="/cart" element= {<Cart />}/>
      <Route path="/order" element= {<PlaceOrder />}/>
    </Routes>

    </div>
  )
}

export default App;