import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Chatbot from './chatbot'

const LayOut = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <Chatbot/>
    </>
  );
};

export default LayOut;
