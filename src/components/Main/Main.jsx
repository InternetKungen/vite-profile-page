// Main.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from '../../views/Projects';
import About from '../../views/About';
import Home from '../../views/Home';
import Contact from '../../views/Contact';
import NotFound from '../../views/NotFound';
import './Main.css';
import FadeOff from '../FadeOff/FadeOff';

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <FadeOff />
        </main>
    );
}

export default Main;
