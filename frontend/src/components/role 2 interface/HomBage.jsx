import React from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
//import ReactDOM from 'react-dom/client';
const HomePage = () => {
  //const navigate =useNavigate()
  const {post , setPost}=useState(null)
  useEffect(() => {
    axios
      .get("http://localhost:5000/books/all")
      .then((response) => {
        console.log(response.data.boooks);
        
        setPost(response.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>{response.data.boooks.map((item,i)=>{
        console.log();
        
      }
      )}</div>
    </>
  );
};

export default HomePage;
