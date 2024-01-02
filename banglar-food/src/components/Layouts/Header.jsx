import React from "react";
import "./Header.css";
import NavigationBar from "./NavigationBar";

const Header = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="hero-img h-[26vh] md:h-screen flex items-center justify-center">
        <div className="md:px-20 text-white font-bold md:text-7xl bg-orange-500 p-4 rounded-lg">
          <h2>Enjoy our food services</h2>
        </div>
      </div>
    </>
  );
};

export default Header;
