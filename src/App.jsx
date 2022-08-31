import React from 'react'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import {Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SameLayout from './pages/samelayout/SameLayout';
import {fabric,travel,hostel,poultry,realestate} from "./pages/pagesdata";
import Auth from './pages/Auth';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/auth" element={<Auth />} />
      
      {/* same layout pages  */}

      <Route path="/travel" element={<SameLayout  data={travel} />} />
      <Route path="/hotels" element={<SameLayout data={hostel} />} />
      <Route path="/real-estate" element={<SameLayout data={realestate} />} />
      <Route path="/fabric" element={<SameLayout data={fabric} />} />
      <Route path="/poultry" element={<SameLayout data={poultry} />} />

    </Routes>
    </>
  )
}

export default App