import React from 'react';
import Home from "./Components/Home";
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Home/>
    <About />
    <Contact />
    <Footer />
  </div>
);

export default App;