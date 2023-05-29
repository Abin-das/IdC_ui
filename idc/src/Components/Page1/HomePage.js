import React from "react";
import NavBar from "./Navbar/navbar"
import Banner from "./Banner/banner"
import SubBanner from "../Page1/Sub_Banner/subbanner"
import Content from "./Content/content"
import Footer from "../Footer/Footer"

const HomePage = () => {
  return <div>
    <NavBar/>
    <Banner/>
    <SubBanner/>
    <Content/>
    <Footer/>
    
    
  </div>;
};

export default HomePage;
