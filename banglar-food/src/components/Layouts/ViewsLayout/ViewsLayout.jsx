import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavigationBar from "../NavigationBar";

const ViewsLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default ViewsLayout;
