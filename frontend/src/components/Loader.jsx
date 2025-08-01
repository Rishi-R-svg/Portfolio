import React, { useContext, useState } from "react";
import "./Loader.css";
import { ChangeContext } from "../App";


const Loader = ({ id, Text, value, infoFirst }) => {


const {isimgtrue,setBool} = useContext(ChangeContext)  
 
  return (
  


    <div className="animated-card" id={id} 
    style={{ backgroundColor: isimgtrue
            ? "rgba(220, 205, 229, 0.097)"
            : "rgba(225, 176, 242, 0.316)",  color: isimgtrue ? "white" : "black"}}
    >
      <h1> {Text} </h1>

      <div className="main-text">{value}</div>
      
    </div>
  );
};

export default Loader;
