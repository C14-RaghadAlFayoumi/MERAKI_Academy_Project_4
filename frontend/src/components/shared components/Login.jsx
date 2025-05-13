import React , {useState} from 'react'
// import "./App.css";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import axios from 'axios';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate =useNavigate()
    const loginButton=()=>{
        axios.post("http://localhost:5000/user/login",{email,password}).then((response) => {
         console.log(response.data);
         if(response.data){
             navigate("/Homepage")
         }
        }).catch((err)=>{
         console.log(err);
         
        })
        ;}

  
    return (
        <>
        <div id="cent2">
      <div className='login'>
        <div className='box2'>
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={loginButton}>LOGIN</button>
        </div>
      </div>
      </div>
      </>
    );
  };
  





export default Login