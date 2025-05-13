import React from 'react';
import "./App.css";
import { useState, createContext } from "react";
import {Route , Routes} from "react-router-dom"
import  Register  from './components/shared components/Register' 
import Login from "./components/shared components/Login"
import HomePage from './components/role 2 interface/HomBage';
const App = () => {
  return (
    <>
   <div className="App">
      <h1>Bookshelf</h1>
      <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
       <Route path="/Homepage" element={<HomePage/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
