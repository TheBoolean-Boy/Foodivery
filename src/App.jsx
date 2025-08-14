import { Route, Router, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Cart from "./Pages/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import Login from "./Pages/Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer } from "react-toastify";


function App() {

  const navigate = useNavigate();

  useEffect ( () => {
    onAuthStateChanged(auth, async(user) => {
      if(user){
        navigate("/")
      }else{
        navigate("/login");
      }
    })
  },[])
  return (
    <>
    
      <div className="app">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>

      </div>

    </>
  )
}

export default App;