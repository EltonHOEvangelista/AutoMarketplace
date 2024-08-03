//App.jsx
import React from "react";
import {Route, Routes} from 'react-router-dom';

// App components
import Home from "./components/Home";
import Footer from "./components/Footer";
import AddVehicle from "./components/AddVehicle";
import Bid from "./components/Bid";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {

  return ( 
      <div className="container">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addvehicle" element={<AddVehicle />} />
          <Route path="/bid/:vin" element={<Bid />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App
