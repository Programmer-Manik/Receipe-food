import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavigationBar from "../NavigationBar";

const LoginLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;
