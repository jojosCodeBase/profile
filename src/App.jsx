import React from "react";
import { Navbar, About, Hero, Footer, Contact, Project } from "./components";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-rich-black">
        <div className="bg-richBlack">
          <Navbar />
          <Hero />
          <About />
        </div>
        <div className="bg-gradient-to-b from-richBlack to-gray-900">
          <Project />
        </div>
        <div className="bg-gray-900">
          <Contact />
        </div>
        <div className="bg-hero-1 bg-cover bg-no-repeat bg-center">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
