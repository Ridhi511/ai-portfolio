import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloatingChat from "./components/FloatingChat";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Chat from "./components/Chat"; // if you still want chat


function App() {
  return (

    <Router>
      <Navbar />

      <div >
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
       <FloatingChat />
    </Router>
  );
}

export default App;