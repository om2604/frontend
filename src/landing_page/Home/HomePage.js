import React from "react";
import HeroSection from "./HeroSection";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";

//importing from other directory -> ../  used
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";
function Homepage() {
  return (
    <>
      <HeroSection />
      <Awards />
      <Pricing />
      <Stats />
      <Education />
      <OpenAccount />
    </>
  );
}

export default Homepage;
