import React, { useContext, useState } from "react";
import "./project.css";
import food1 from "../assets/food1.png";
import bussiness from "../assets/Screenshot (5).png";
import travel from "../assets/Screenshot (6).png";
import weather from "../assets/Screenshot (7).png";
import todo from "../assets/Screenshot (8).png";
import portfolio from "../assets/portfolio ss.png"
import Note from "../assets/noteapp ss.png"

import { ChangeContext } from "../App";
import { NavLink } from "react-router-dom";

const Projects = () => {
  const { isimgtrue, setbool } = useContext(ChangeContext);

  const [toggleStack,setToggleStack] = useState(null)


  const handleToggleStack = (i)=> {
    setToggleStack((prev)=>prev===i? null: i)
  }

 



  return (
    <div className="project-section">
      <div className="project-heading">
        <h1>What I can build ?</h1>
       <h2>Here's my Projects</h2>
      </div>
      
    <div 
    className="project-container"
    >










     <div
        className="project-box"
        style={{
          color: isimgtrue ? "white" : "black",
          backgroundColor: isimgtrue
            ? "rgba(220, 205, 229, 0.097)"
            : "rgba(225, 176, 242, 0.316)",
        }}
      >
        <div className="project-child">

          
        <div className={toggleStack===1? 'project-stack active':'project-stack'}
         style={{backgroundColor:isimgtrue?'rgba(0, 0, 0, 0.57)':'rgba(255, 255, 255, 0.8)'}}
        >

          <div className="tech-stack"><h4>Tech stack :</h4> <h5>ReactJS, ExpressJS, NodeJS, MongoDB, Postman, CSS </h5></div>
          <div className="description">Description</div>
          <div className="description-content" >This is my personal portfolio, added some unique features in it like toggle theme and built form using reack hook form in contact section and also used a simple user friendly design and color palatte, for backend i made a visitor model which store question or quarries of visitor which he filled in contact page and then the question will automatically comes to me and also to the visitor via Email, i used nodemailer utility for that deployed on Render.</div>



          <div className="close-stack"
          onClick={()=>handleToggleStack(0)}
        ><i className="fa-solid fa-plus"></i></div></div>

          
          <div className="project-image">
            <img src={portfolio} alt="" />
          </div>
          <div className="project-content">
            <h1>
              {" "}
              <span>Portfolio</span> 
            </h1>
            <h2>
              built With <span>ReactJS, MongoDB, Express and Nodejs</span> and fully{" "}
              <span>Responsive</span>.{" "}
            </h2>
            <h3>Made that When i learned <span> MERN</span> stack development</h3>
            <div className="project-live-check"> <a href="https://portfolio-zh3k.onrender.com">See Live</a> 
            <h4
             onClick={()=>handleToggleStack(1)}
            >Read More</h4>
            
            </div>
          </div>
        </div>
        

      </div>







 <div
        className="project-box"
        style={{
          color: isimgtrue ? "white" : "black",
          backgroundColor: isimgtrue
            ? "rgba(220, 205, 229, 0.097)"
            : "rgba(225, 176, 242, 0.316)",
        }}
      >
        <div className="project-child">

          
        <div className={toggleStack===2? 'project-stack active':'project-stack'}
         style={{backgroundColor:isimgtrue?'rgba(0, 0, 0, 0.57)':'rgb(255, 255, 255)'}}
        >


          <div className="tech-stack"><h4>Tech stack :</h4> <h5>ReactJS, ExpressJS, NodeJS, MongoDB, Postman, CSS </h5></div>
          <div className="description">Description</div>
          <div className="description-content" > A simple notes app in which i added Authontication steps to use it like Register and Login a Registerd user can create, edit, delete his note. The notes will be stored directly to MongoDB, used a simple and user friendly desin and color palatte, used react router for smooth navigation and for connection to backend i used axios and deployed on Render. </div>

          <div className="close-stack"
          onClick={()=>handleToggleStack(0)}
        ><i className="fa-solid fa-plus"></i></div></div>

          
          <div className="project-image">
            <img src={Note} alt="note app" />
          </div>
          <div className="project-content">
            <h1>
              {" "}
              <span>NotesApp</span> 
            </h1>
            <h2>
              built With <span>ReactJS, MongoDB, Express and Nodejs</span> and fully{" "}
              <span>Responsive</span>.{" "}
            </h2>
            <h3>Made that When i was practicing API's, Routes, DB Model, MVC Pattern in<span> MERN</span> stack development</h3>
            <div className="project-live-check"> <a href="https://note-app-frontend-djft.onrender.com">See Live</a>
            <h4
             onClick={()=>handleToggleStack(2)}
            >Read More</h4>
            
             </div>
          </div>
        </div>
        

      </div>






      <div
        className="project-box"
        style={{
          color: isimgtrue ? "white" : "black",
          backgroundColor: isimgtrue
            ? "rgba(220, 205, 229, 0.097)"
            : "rgba(225, 176, 242, 0.316)",
        }}
      >
        <div className="project-child">
          
        <div className={toggleStack===3? 'project-stack active':'project-stack'}
         style={{backgroundColor:isimgtrue?'rgba(0, 0, 0, 0.57)':'rgb(255, 255, 255)'}}
        >

             <div className="tech-stack"><h4>Tech stack :</h4> <h5> HTML, CSS, JS </h5></div>
          <div className="description">Description</div>
          <div className="description-content">This is a ecommerce food and grocery website frontend which has unique and smooth UI made with basic tech stack and added some UI functionaliity with Javascript like live cart handleling, add to favouraites and add to cart, live bill count , deployed on github. </div>


        



          <div className="close-stack"
          onClick={()=>handleToggleStack(0)}
        ><i className="fa-solid fa-plus"></i></div></div>

          
          <div className="project-image">
            <img src={food1} alt="" />
          </div>
          <div className="project-content">
            <h1>
              {" "}
              <span>E-Commerce</span> Website "Foodzy"
            </h1>
            <h2>
              builded With <span>HTML,CSS,JS</span> and fully{" "}
              <span>Responsive</span>.{" "}
            </h2>
            <h3>Made that When i learned Javascript</h3>
            <div className="project-live-check"> <a href="https://rishi-r-svg.github.io/Foodz/">See Live</a>
            <h4
             onClick={()=>handleToggleStack(3)}
            >Read More</h4>
            
             </div>
          </div>
        </div>
        

      </div>

      <div
        className="project-box"
        style={{
          color: isimgtrue ? "white" : "black",
          backgroundColor: isimgtrue
            ? "rgba(220, 205, 229, 0.097)"
            : "rgba(225, 176, 242, 0.316)",
        }}
      >
        <div className="project-child">
          
        <div className={toggleStack===4? 'project-stack active':'project-stack'}
         style={{backgroundColor:isimgtrue?'rgba(0, 0, 0, 0.55)':'rgb(255, 255, 255)'}}
        >


          <div className="tech-stack"><h4>Tech stack :</h4> <h5> HTML, CSS, JS </h5></div>
          <div className="description">Description</div>
          <div className="description-content"> This is a Bussiness management frontend which is made with simple tech stack and does not have any Javascript functionality init but built a clean and sleek UI using vanila css and used sandbox for the reference built when i was learning css  and deployed on github.  </div>




          <div className="close-stack"
          onClick={()=>handleToggleStack(0)}
        ><i className="fa-solid fa-plus"></i></div></div>

          
          <div className="project-image">
            <img src={bussiness} alt="" />
          </div>
          <div className="project-content">
            <h1>
              {" "}
              <span>Bussiness Management</span> Website
            </h1>
            <h2>
              builded With <span>HTML,CSS</span> and fully{" "}
              <span>Responsive</span>.{" "}
            </h2>
            <h3>
              Made that When i learned <span>CSS</span>{" "}
            </h3>
            <div className="project-live-check"> <a href="https://rishi-r-svg.github.io/Business-management/">See Live</a>
            <h4
             onClick={()=>handleToggleStack(4)}
            >Read More</h4>
            
             </div>
          </div>
        </div>
      
      </div>

      <div
        className="project-box"
        style={{
          color: isimgtrue ? "white" : "black",
          backgroundColor: isimgtrue
            ? "rgba(220, 205, 229, 0.097)"
            : "rgba(225, 176, 242, 0.316)",
        }}
      >
        <div className="project-child">
          
        <div className={toggleStack===5? 'project-stack active':'project-stack'}
         style={{backgroundColor:isimgtrue?'rgba(0, 0, 0, 0.57)':'rgb(255, 255, 255)'}}
        >


          <div className="tech-stack"><h4>Tech stack :</h4> <h5> HTML, CSS, JS </h5></div>
          <div className="description">Description</div>
          <div className="description-content">This is a Travel agency website frontend  which is made with basic tech stack like html, css and Javascript, i've added a search baar toggle functionality and used a clean and sleek design and color palatte comforting user experience and deployed on github. </div>




          <div className="close-stack"
          onClick={()=>handleToggleStack(0)}
        ><i className="fa-solid fa-plus"></i></div></div>
          
          <div className="project-image">
            <img src={travel} alt="" />
          </div>
          <div className="project-content">
            <h1>
              {" "}
              <span>Travel Agency</span> Website "Amping"
            </h1>
            <h2>
              builded With <span>HTML,CSS,JS</span> and fully{" "}
              <span>Responsive</span>.{" "}
            </h2>
            <h3>Made that for practice</h3>
            <div className="project-live-check"> <a href="https://rishi-r-svg.github.io/Travel/">See Live</a>
            <h4
             onClick={()=>handleToggleStack(5)}
            >Read More</h4>
            
            </div>
          </div>
        </div>
      
      </div>

      <div
        className="project-box"
        style={{
          color: isimgtrue ? "white" : "black",
          backgroundColor: isimgtrue
            ? "rgba(220, 205, 229, 0.097)"
            : "rgba(225, 176, 242, 0.316)",
        }}
      >
        
        <div className="project-child">

        <div className={toggleStack===6? 'project-stack active':'project-stack'}
         style={{backgroundColor:isimgtrue?'rgba(0, 0, 0, 0.57)':'rgb(255, 255, 255)'}}
        >


          <div className="tech-stack"><h4>Tech stack :</h4> <h5> HTML, CSS, JS </h5></div>
          <div className="description">Description</div>
          <div className="description-content">This is a weather app which is built with basic tech stack. In this app you can see the weather worldwide, I used third party API's in this app it will show the humidiy, temperature and wind speed. It will show the images according to the current weather. deployed on github.</div>



          <div className="close-stack"
          onClick={()=>handleToggleStack(0)}
        ><i className="fa-solid fa-plus"></i></div></div>

        
          <div className="project-image">
            <img src={weather} alt="" />
          </div>
          <div className="project-content">
            <h1>
              {" "}
              <span>Weather App</span>
            </h1>
            <h2>
              builded With <span>HTML,CSS,JS</span> and fully{" "}
              <span>Responsive</span>.{" "}
            </h2>
            <h3>
              Made that When i was learning about{" "}
              <span>API's, Promise's, and Async-Await</span>{" "}
            </h3>
            <div className="project-live-check"> <a href="https://rishi-r-svg.github.io/Weather/">See Live</a>
            <h4  
            onClick={()=>handleToggleStack(6)}
            >Read More</h4>
            
             </div>
          </div>
        </div>
      
      </div>


      </div>
    </div>
  );
};

export default Projects;
