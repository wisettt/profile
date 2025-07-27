// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Qualification from './components/Qualification';
import About from './components/About';
import Certificate from './components/Certificate';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <Navbar menuActive={menuActive} toggleMenu={toggleMenu} setMenuActive={setMenuActive} />
      
      {/* ให้แต่ละ Section เต็มหน้าจอ */}
      <section className="main-section">
        <Hero />
      </section>

      <section className="main-section">
        <Qualification />
      </section>

      

      <section className="main-section">
        <Certificate />
      </section>
      <section className="main-section">
        <About />
      </section>
    </>
  );
}

export default App;
