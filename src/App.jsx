import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
    <Router>
      <div>
        <Header />
        <Main />
      </div>
    </Router>
    );
}

export default App;