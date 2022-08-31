import React from 'react'
import Businesses from "../components/Businesses/Businesses.jsx";
import CoverImg from "../components/CoverImg/CoverImg";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/carousel/Carousel";
// import Carousel1 from '../components/carousel/Carousel1.jsx';

const Home = () => {
  return (
    <div className='home'>
      
      <Carousel />
      <Businesses />
      <CoverImg />
      <Footer />
      </div>
  )
}

export default Home