import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="h-screen dark:text-white dark:bg-[#111]">
      <Header />
      <Home />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
