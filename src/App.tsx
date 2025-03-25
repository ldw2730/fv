import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import XRSolution from './components/XRSolution/XRSolution';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import './App.css';
import Paragraph from './components/Paragraph/Pragraph';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Paragraph />
          <XRSolution />
          <Work />
          <Contact />
        </main>
      </div>
    </Router>
  );
}

export default App;
