import React from "react";
import Navbar from "../components/Navbar";
import Game from "../components/Games";
import Footer from "../components/Footer";
function Games() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Game />
      </div>
      <Footer />
    </>
  );
}

export default Games;
