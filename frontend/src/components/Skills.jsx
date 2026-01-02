import React, { useContext } from "react";
import "./Skills.css";
import { ChangeContext } from "../App";
import { motion } from "framer-motion";

import html from "../assets/html-5-svgrepo-com.svg";
import css from "../assets/css-3-svgrepo-com.svg";
import js from "../assets/javascript-svgrepo-com.svg";
import react from "../assets/react-svgrepo-com.svg";
import figma from "../assets/figma-svgrepo-com.svg";
import tailwind from "../assets/tailwind-svgrepo-com.svg";
import adobe from "../assets/adobe-xd-svgrepo-com.svg";
import vscode from "../assets/vs-code-svgrepo-com.svg";
import node from "../assets/nodejs-1-logo-svgrepo-com (1).svg";
import express from "../assets/express-svgrepo-com.svg";
import mongodb from "../assets/mongodb-svgrepo-com.svg";
import postman from "../assets/postman-icon-svgrepo-com.svg";
import devtools from "../assets/chrome-devtools-svgrepo-com.svg";
import whiteexp from "../assets/white express.svg";

const Skills = () => {
  const { isimgtrue } = useContext(ChangeContext);

  const glassStyle = {
    backgroundColor: isimgtrue ? "rgba(20, 20, 20, 0.6)" : "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(12px)",
    border: isimgtrue ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: isimgtrue ? "0 4px 30px rgba(0, 0, 0, 0.5)" : "0 4px 30px rgba(0, 0, 0, 0.1)",
    color: isimgtrue ? "white" : "black",
  };

  const skillsData = [
    { name: "HTML5", icon: html, percent: "90%" },
    { name: "CSS3", icon: css, percent: "95%" },
    { name: "JavaScript", icon: js, percent: "80%" },
    { name: "React", icon: react, percent: "80%" },
    { name: "Tailwind", icon: tailwind, percent: "70%" },
    { name: "Node JS", icon: node, percent: "60%" },
    { name: "Express", icon: isimgtrue ? whiteexp : express, percent: "80%" },
    { name: "MongoDB", icon: mongodb, percent: "85%" },
    { name: "Figma", icon: figma, percent: "80%" },
    { name: "Postman", icon: postman, percent: "70%" },
    { name: "DevTools", icon: devtools, percent: "90%" },
    { name: "VS Code", icon: vscode, percent: "80%" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section
      className="skills-section"
      style={{
        backgroundColor: isimgtrue ? "#050505" : "#f0f2f5",
        color: isimgtrue ? "white" : "black",
      }}
    >
      <div className="glow-bg" style={{ opacity: isimgtrue ? 0.6 : 0.3 }}></div>

      <motion.div 
        className="skills-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="main-title">My <span className="highlight">Arsenal</span></h1>
        <p className="subtitle">The tools and technologies I use to bring ideas to life.</p>
      </motion.div>

      <motion.div 
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skillsData.map((skill, index) => (
          <motion.div key={index} className="skill-card" style={glassStyle} variants={item}>
            <div className="icon-wrapper">
              <img src={skill.icon} alt={skill.name} />
            </div>
            
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <div className="progress-container">
                <div className="progress-label">
                    <span>Proficiency</span>
                    <span>{skill.percent}</span>
                </div>
                <div className="progress-bg">
                    <div 
                        className="progress-fill" 
                        style={{ width: skill.percent }}
                    ></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;