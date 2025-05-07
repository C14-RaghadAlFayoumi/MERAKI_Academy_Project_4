import React from 'react';
import "./App.css";
import { useState, createContext } from "react";
import  Register  from './components/shared components/Register' 
const App = () => {
  return (
    <>
   <div className="App">
      <h1>Bookshelf</h1>
      <Register/>
    </div>
    </>
  )
}

export default App
