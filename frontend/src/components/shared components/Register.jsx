import React, { useState,UserContext } from "react";
import "../../App.css";
import axios from "axios"
//import { Register } from "../../../../backend/controllers/User";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate =useNavigate()
 //const { setUser } = useContext(UserContext);
  const regesterButton=()=>{
   axios.post("http://localhost:5000/user/register",{firstName,lastName,age,email,password}).then((response) => {
    console.log(response.data);
    if(response.data){
        navigate("/Login")
    }
   }).catch((err)=>{
    console.log(err);
    
   })
   ;}
 


  //axios.get("http://localhost:5000/register"), {
    //headers: {
     // authorization: `Bearer ${token}`,
   // }

  return (
    <>
    <div id="cent">
      <div className="register">
        <div className="box">
        <label>FirstName</label>
        <input
          type="text"
          
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <label>LastName</label>
        <input
          type="text"
          //placeholder="lastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input></div>
        <div className="box">
        <label>Age</label>
        <input
          type="number"
         // placeholder="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        ></input>
        <label>Eamil</label>
        <input
          type="email"
          //placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        </div>
        <div className="box">
        <label>Password</label>
        <input
          type="password"
         // placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input></div>
        <button onClick={regesterButton}>REGISTER</button>
      </div>
      </div>
    </>
  );
};

export default Register;
