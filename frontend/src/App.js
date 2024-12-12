import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects"; // Ensure this component is exported properly
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <NavBar /> {/* This will appear across all pages */}
      <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} /> {/* Ensure this component is properly imported */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/footer" element={<Footer />} />
     </Routes>
  </Router>
);

export default App;
