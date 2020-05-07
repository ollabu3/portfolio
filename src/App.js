import React from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Greet from "./Components/Greet/Greet";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Greet />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
