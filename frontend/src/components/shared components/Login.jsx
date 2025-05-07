import React from 'react'
import "./App.css";
import { login } from '../../../../backend/controllers/User';
const login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
      <div>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <input
          type="email"
          placeHolder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeHolder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
    );
  };
  





export default login