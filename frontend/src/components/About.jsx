import React, { useContext, useRef } from "react";
import { ChangeContext } from "../App";
import "./About.css";
import { motion } from "framer-motion";

import bfacebook from "../social logos/facebook-svgrepo-com (1).svg";
import facebook from "../social logos/facebook-svgrepo-com.svg";
import bgithub from "../social logos/github-142-svgrepo-com.svg";
import github from "../social logos/github-142-svgrepo-com (1).svg";
import binsta from "../social logos/instagram-svgrepo-com (1).svg";
import insta from "../social logos/instagram-svgrepo-com (2).svg";
import btwitter from "../social logos/twitter-logo-fill-svgrepo-com.svg";
import twitter from "../social logos/twitter-logo-fill-svgrepo-com (1).svg";
import linkdin from "../social logos/linkedin-svgrepo-com.svg";
import blinkdin from "../social logos/linkedin-svgrepo-com (1).svg";

import Circleloader from "./Circleloader";
import { NavLink } from "react-router-dom";

const About = () => {
  const { isimgtrue } = useContext(ChangeContext);
  const btnRef = useRef(null);

  const handleBtnMouseMove = (e) => {
    const btn = btnRef.current;
    if (btn) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty("--x", `${x}px`);
      btn.style.setProperty("--y", `${y}px`);
    }
  };

  const glassStyle = {
    backgroundColor: isimgtrue ? "rgba(20, 20, 20, 0.6)" : "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(12px)",
    border: isimgtrue ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: isimgtrue ? "0 4px 30px rgba(0, 0, 0, 0.5)" : "0 4px 30px rgba(0, 0, 0, 0.1)",
    color: isimgtrue ? "white" : "black",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      className="about-section"
      style={{
        backgroundColor: isimgtrue ? "#050505" : "#f0f2f5",
        color: isimgtrue ? "white" : "black",
      }}
    >
      <div className="glow-bg" style={{ opacity: isimgtrue ? 0.6 : 0.3 }}></div>

      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="typewritter">
            <h2 className="greeting">Hello, I'm</h2>
            <h1 className="name-title">
              <span>Rishi</span>
            </h1>

            <div className="carousel-container">
              <div className="carousel-wrapper">
                <div className="carousel-item">MERN Development</div>
                <div className="carousel-item">Software Developer</div>
                <div className="carousel-item">Web Designer</div>
                <div className="carousel-item">Fintech Developer</div>
                <div className="carousel-item">Web Development</div>
                <div className="carousel-item">MERN Development</div>
              </div>
            </div>

            <motion.div 
              className="btn-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <NavLink
                to="/Contact"
                className="modern-btn"
                ref={btnRef}
                onMouseMove={handleBtnMouseMove}
              >
                <span>Let's Talk</span>
              </NavLink>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="visual-circle" style={glassStyle}>
            <Circleloader />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="bento-box large-box" style={glassStyle} variants={itemVariants}>
          <h3>About Me</h3>
          <p>
            Passionate and creative Developer experienced in building diverse solutions—from pixel-perfect static sites to complex full-stack web applications and software. 
            I transform raw ideas into scalable reality using the MERN stack and modern design principles.
          </p>
        </motion.div>

        <motion.div className="bento-box" style={glassStyle} variants={itemVariants}>
          <h3>8+ Projects</h3>
          <p>Real-world applications with optimized performance and SEO.</p>
          <NavLink to="/Projects" className="arrow-link">View Work ↗</NavLink>
        </motion.div>

        <motion.div className="bento-box" style={glassStyle} variants={itemVariants}>
          <h3>Toolbox</h3>
          <p>Mastery in React, Node, Figma, and modern CSS.</p>
          <NavLink to="/Skills" className="arrow-link">Check Skills ↗</NavLink>
        </motion.div>

        <motion.div className="bento-box large-box" style={glassStyle} variants={itemVariants}>
          <h3>Problem Solver</h3>
          <p>
            I don’t just write code, I solve real business problems. I focus on clean architecture, performance optimization, scalable design, and user-centric experiences to deliver solutions that actually work in production.
          </p>
        </motion.div>

        <motion.div className="bento-box social-box" style={glassStyle} variants={itemVariants}>
          <div className="social-content">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="contact-action">
               <span>contact@rishi.dev</span>
            </div>
          </div>
          <div className="social-icons">
            <a href="#"><img src={isimgtrue ? insta : binsta} alt="insta" /></a>
            <a href="#"><img src={isimgtrue ? bfacebook : facebook} alt="fb" /></a>
            <a href="#"><img src={isimgtrue ? github : bgithub} alt="git" /></a>
            <a href="#"><img src={isimgtrue ? twitter : btwitter} alt="x" /></a>
            <a href="#"><img src={isimgtrue ? blinkdin : linkdin} alt="in" /></a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;