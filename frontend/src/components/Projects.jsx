import React, { useContext } from "react";
import "./project.css";
import { ChangeContext } from "../App";
import { motion } from "framer-motion";

import food1 from "../assets/food1.png";
import bussiness from "../assets/Screenshot (5).png";
import travel from "../assets/Screenshot (6).png";
import weather from "../assets/Screenshot (7).png";
import portfolio from "../assets/portfolio ss.png";
import Note from "../assets/noteapp ss.png";
import MeriPehchaan from "../assets/MeriPehchaan.png";
import StockCheckHome from "../assets/StockCheckHome.png";

const Projects = () => {
  const { isimgtrue } = useContext(ChangeContext);

  const glassStyle = {
    backgroundColor: isimgtrue ? "rgba(20, 20, 20, 0.6)" : "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(12px)",
    border: isimgtrue ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: isimgtrue ? "0 4px 30px rgba(0, 0, 0, 0.5)" : "0 4px 30px rgba(0, 0, 0, 0.1)",
    color: isimgtrue ? "white" : "black",
  };

  const clientProjects = [
    {
      id: 101,
      title: "StockCheck360",
      subtitle: "SaaS Inventory Tool",
      img: StockCheckHome,
      stack: ["React", "Supabase", "Tailwind CSS"],
      desc: "A comprehensive SaaS solution for stock management. Built with React for a dynamic UI and Supabase for a robust backend and real-time database.",
      live: "#",
    },
    {
      id: 102,
      title: "MeriPehchaan",
      subtitle: "NGO Web Application",
      img: MeriPehchaan,
      stack: ["React", "NodeJS", "Express", "MongoDB"],
      desc: "A dedicated MERN stack web application designed for an NGO to manage their activities, outreach programs, and social impact.",
      live: "#",
    },
  ];

  const personalProjects = [
    {
      id: 1,
      title: "Portfolio",
      subtitle: "Personal Brand Website",
      img: portfolio,
      stack: ["ReactJS", "NodeJS", "Express", "MongoDB"],
      desc: "My personal portfolio featuring a toggle theme, contact form with Nodemailer integration, and a visitor query system.",
      live: "https://portfolio-zh3k.onrender.com",
    },
    {
      id: 2,
      title: "NotesApp",
      subtitle: "Secure Note Management",
      img: Note,
      stack: ["ReactJS", "MongoDB", "Express", "Auth"],
      desc: "A full-stack notes app with Authentication (Login/Register). Users can Create, Edit, and Delete notes securely.",
      live: "https://note-app-frontend-djft.onrender.com",
    },
    {
      id: 3,
      title: "Foodzy",
      subtitle: "E-Commerce Frontend",
      img: food1,
      stack: ["HTML", "CSS", "JavaScript"],
      desc: "A food grocery UI with live cart handling, favorites functionality, and dynamic bill calculation.",
      live: "https://rishi-r-svg.github.io/Foodz/",
    },
    {
      id: 4,
      title: "Amping",
      subtitle: "Travel Agency UI",
      img: travel,
      stack: ["HTML", "CSS", "JavaScript"],
      desc: "A sleek travel agency website featuring search toggle functionality and a comforting user experience.",
      live: "https://rishi-r-svg.github.io/Travel/",
    },
    {
      id: 5,
      title: "Weather App",
      subtitle: "Live Forecasts",
      img: weather,
      stack: ["API", "Async/Await", "JS"],
      desc: "Live weather tracking using third-party APIs. Displays humidity, temperature, and wind speed with dynamic images.",
      live: "https://rishi-r-svg.github.io/Weather/",
    },
    {
      id: 6,
      title: "Business Mgmt",
      subtitle: "Corporate UI Design",
      img: bussiness,
      stack: ["HTML", "CSS"],
      desc: "A clean, pixel-perfect business management interface focused on layout structure and CSS mastery.",
      live: "https://rishi-r-svg.github.io/Business-management/",
    },
  ];

  const renderProjectCard = (project) => (
    <motion.div 
      key={project.id} 
      className="project-card" 
      style={glassStyle}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="card-image">
        <img src={project.img} alt={project.title} />
        <div className="card-overlay">
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="view-btn">
            View Live ↗
          </a>
        </div>
      </div>

      <div className="card-content">
        <div className="card-header">
          <h2>{project.title}</h2>
          <span>{project.subtitle}</span>
        </div>
        
        <div className="tech-tags">
          {project.stack.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>

        <p className="card-desc">{project.desc}</p>
      </div>
    </motion.div>
  );

  return (
    <section
      className="project-section"
      style={{
        backgroundColor: isimgtrue ? "#050505" : "#f0f2f5",
        color: isimgtrue ? "white" : "black",
      }}
    >
      <div className="glow-bg" style={{ opacity: isimgtrue ? 0.6 : 0.3 }}></div>

      <motion.div 
        className="project-heading"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="main-title">Featured <span className="highlight">Works</span></h1>
        <p className="subtitle">Real-world applications and experiments.</p>
      </motion.div>

      <div className="projects-category">
        <motion.h2 
          className="category-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional <span className="highlight">Projects</span>
        </motion.h2>
        
        {clientProjects.length > 0 ? (
          <div className="project-grid">
            {clientProjects.map(renderProjectCard)}
          </div>
        ) : (
          <motion.div 
            className="empty-state" 
            style={glassStyle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3>Coming Soon...</h3>
            <p>I will add my Client and Professional work here very soon.</p>
          </motion.div>
        )}
      </div>

      <div className="projects-category">
        <motion.h2 
          className="category-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Personal <span className="highlight">Projects</span>
        </motion.h2>
        <div className="project-grid">
          {personalProjects.map(renderProjectCard)}
        </div>
      </div>

    </section>
  );
};

export default Projects;