import './App.css';
import Header from './components/header';
import React, {useState} from 'react';
import Navbar from './components/navbar';
import Courses from './Page/courses'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';




function App() {
  return(
  
    
    <div className="App">
      <Header />
      <Navbar />
      <Courses />
    </div>
    
    
     
  );
}

export default App;