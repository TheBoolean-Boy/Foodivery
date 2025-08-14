
import { useState } from 'react';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import Header from '../../Components/Header/Header';
import './Home.css'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDownload from '../../Components/AppDownload/AppDownload';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Navbar />
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category ={category} />
      <AppDownload />
      <Footer />
    </div>
  )
}

export default Home;