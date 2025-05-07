import React, { useState} from "react";
import "./App.css";
//import { Register } from "../../../../backend/controllers/User";

const Register = () => {
  return (
    <>
      <div className="register">
        <label>FirstName</label>
        <input
          type="text"
          placeholder="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <label>LastName</label>
        <input
          type="text"
          placeholder="lastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <label>Age</label>
        <input
          type="number"
          placeholder="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        ></input>
        <label>Eamil</label>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
       
      </div>
    </>
  );
};

export default Register;
