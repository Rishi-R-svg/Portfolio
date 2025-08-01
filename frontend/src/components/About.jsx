import React, { useContext, useEffect, useState } from "react";

import { ChangeContext } from "../App";


import "./Navbar.css";
import "./About.css";

import bfacebook from "../social logos/facebook-svgrepo-com (1).svg"
import facebook from "../social logos/facebook-svgrepo-com.svg"
import bgithub from "../social logos/github-142-svgrepo-com.svg"
import github from "../social logos/github-142-svgrepo-com (1).svg"
import binsta from "../social logos/instagram-svgrepo-com (1).svg"
import insta from "../social logos/instagram-svgrepo-com (2).svg"
import btwitter from "../social logos/twitter-logo-fill-svgrepo-com.svg"
import twitter from "../social logos/twitter-logo-fill-svgrepo-com (1).svg"
import linkdin from "../social logos/linkedin-svgrepo-com.svg"
import blinkdin from "../social logos/linkedin-svgrepo-com (1).svg"
import programing from "../assets/coding.png"
import designer from "../assets/web-design.png"



import Circleloader from "./Circleloader";

import { NavLink, useNavigate } from "react-router-dom";











const About = () => {
  const { isimgtrue, setBool } = useContext(ChangeContext);

  return (
    <section
      className="about-section"
      style={{
        color: isimgtrue ? "white" : "black",
        backgroundColor: isimgtrue ? "black" : "white",
      }}
    >
      <div className="first-box">
        <div className="typewritter">
          <h2>Hii,</h2>
          <h2>
            I'm <span>Rishi</span>
          </h2>

          <div className="carda">
            <div className="loadera">
              <div className="words">
                {/* // Animation CSS in About.css */}
                <span className="word"></span>
                <span className="word">MERN Developer</span>
                <span className="word">UI-UX Designer</span>
                <span className="word">Web Developer</span>
                <span className="word"></span>
              </div>
            </div>
            <div className="btn-box">
             
              <NavLink to='/Contact'>Contact Me</NavLink>
            </div>
          </div>
        </div>

        <div className="pacman">
          <div className="pacman-position">
            <Circleloader className="animation" />
          </div>
        </div>
      </div>



      <div className="detail-about">
       



     

        <div className="services">

           <div className="brief-about sbox"
           style={{boxShadow:isimgtrue?'0px 0px 15px rgba(255, 255, 255, 0.142)':'0px 0px 15px rgba(0, 0, 0, 0.3)',
            backgroundColor:isimgtrue?'rgba(0, 0, 0, 1)':'rgba(255, 255, 255, 1)'
           }}
           >
           <h1>About</h1>
           <div className="brief">Passionate and creative Developer known for crafting visually stunning and user friendly websites. I transform ideas into reality. Worked on various projects and developed enough skills</div>
          </div>
          <div className="first-service sbox"
          style={{boxShadow:isimgtrue?'0px 0px 15px rgba(255, 255, 255, 0.142)':'0px 0px 15px rgba(0, 0, 0, 0.3)',
            backgroundColor:isimgtrue?'rgba(0, 0, 0, 1)':'rgba(255, 255, 255, 1)'
          }}
          >
           <h1>8+  Projects</h1>
           <div className="brief">
           Worked on many real world projects and optimized overall performance and improved search engine optimization(SEO). 
            <NavLink to='/Projects'>See More</NavLink>

           </div>
          </div>
          <div className="first-service sbox"
          style={{boxShadow:isimgtrue?'0px 0px 15px rgba(255, 255, 255, 0.142)':'0px 0px 15px rgba(0, 0, 0, 0.3)',
            backgroundColor:isimgtrue?'rgba(0, 0, 0, 1)':'rgba(255, 255, 255, 1)'
          }}
          >
           <h1>  Tools Mastery</h1>
            <div className="brief">
          I use various tools for projects and by using them i developed good hands on them. 
           <NavLink to='/Skills'>See More</NavLink>

           </div>
          </div>

           
         
          
        </div>

        

      
        <div className="about-contact-info">
          <h1>Let's connect on social platforms</h1>
          <div className="handles">
          <div className="s-handles"><a href=""><img src={isimgtrue? insta : binsta} alt="instagram" /></a></div>
          <div className="s-handles"><a href=""><img src={isimgtrue? bfacebook : facebook} alt="facebook" /></a></div>
          <div className="s-handles"><a href=""><img src={isimgtrue? github : bgithub} alt="github" /></a></div>
          <div className="s-handles"><a href=""><img src={isimgtrue? twitter : btwitter} alt="twitter" /></a></div>
          <div className="s-handles"><a href=""><img src={isimgtrue? blinkdin : linkdin} alt="twitter" /></a></div>
         </div>

        <NavLink to='./Contact' >Any Quarries?</NavLink>

        </div>
        </div>
     

  

    </section>
  );
};

export default About;
