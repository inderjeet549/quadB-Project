import React from "react";
import Navbar from "../components/Navbar";
import Game from "../components/Games";
import Footer from "../components/Footer";
function Admin() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        {/* <admin /> */}
        <Game/>
      </div>
      <Footer />
    </>
  );
}

export default Admin;