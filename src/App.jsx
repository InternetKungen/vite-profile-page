import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
    const theme = useSelector((state) => state.theme);

    return (
    <Router>
      <div className={`app-container ${theme}`}>
        <Header />
        <Main />
      </div>
    </Router>
    );
}

export default App;