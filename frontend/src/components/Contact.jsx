import React, { useContext, useState } from "react";
import "./Contact.css";
import { ChangeContext } from "../App";
import { useForm } from "react-hook-form";
import { sendData } from "../Authservice/Auth";
import { motion } from "framer-motion";

import ig from "../assets/instagram-svgrepo-com.svg";
import fb from "../assets/facebook-svgrepo-com (1).svg";
import github from "../assets/github-repo-git-octocat-svgrepo-com.svg";
import linkedin from "../assets/linkedin-svgrepo-com.svg";

const Contact = () => {
  const { isimgtrue } = useContext(ChangeContext);
  const [toast, setToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onsubmit(e) {
    try {
      await sendData(e);
      setToast(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
      reset();
    } catch (err) {
      setToastMsg(err.response?.data?.message || "Something went wrong");
      setToast(true);
      setTimeout(() => setToast(false), 4000);
    }
  }

  const glassStyle = {
    backgroundColor: isimgtrue ? "rgba(20, 20, 20, 0.6)" : "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(12px)",
    border: isimgtrue ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: isimgtrue ? "0 4px 30px rgba(0, 0, 0, 0.5)" : "0 4px 30px rgba(0, 0, 0, 0.1)",
    color: isimgtrue ? "white" : "black",
  };

  return (
    <section
      className="contact-section"
      style={{
        backgroundColor: isimgtrue ? "#050505" : "#f0f2f5",
        color: isimgtrue ? "white" : "black",
      }}
    >
      <div className="glow-bg" style={{ opacity: isimgtrue ? 0.6 : 0.3 }}></div>

      <div className={`toast-message ${toast ? "show" : ""}`}>
        {toastMsg}
      </div>
      <div className={`success-message ${success ? "show" : ""}`}>
        Message Sent Successfully!
      </div>

      <div className="contact-container">
        <motion.div 
          className="contact-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="main-title">Get in <span className="highlight">Touch</span></h1>
          <p className="subtitle">Have a project in mind or just want to say hi?</p>
        </motion.div>

        <motion.div 
          className="contact-card-wrapper" 
          style={glassStyle}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          
          <div className="contact-info-side">
            <h3>Let's Chat</h3>
            <p>
              I am currently <strong>Open to Work</strong>. I'm also open to freelance opportunities, collaborations, or just discussing code. 
              Feel free to reach out!
            </p>
            
            <div className="info-item">
              <span className="info-label">Email Me</span>
              <a href="mailto:contact@rishi.dev" className="info-value">rishikumarsing2004@gmail.com</a>
            </div>

            <div className="social-links-container">
              <span>Follow Me</span>
              <div className="social-row">
                <a href="https://github.com"><img src={github} alt="GitHub" /></a>
                <a href="https://linkedin.com"><img src={linkedin} alt="LinkedIn" /></a>
                <a href="https://instagram.com"><img src={ig} alt="Instagram" /></a>
                <a href="https://facebook.com"><img src={fb} alt="Facebook" /></a>
              </div>
            </div>
          </div>

          <div className="contact-form-side">
            <form onSubmit={handleSubmit(onsubmit)}>
              
              <div className="form-group">
                <label>Full Name</label>
                <input
                  className={`modern-input ${errors.fullname ? "error" : ""}`}
                  {...register("fullname", {
                    required: "Name is required",
                    minLength: { value: 3, message: "Min 3 chars" },
                  })}
                  style={{ 
                    color: isimgtrue ? "white" : "black",
                    background: isimgtrue ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
                  }}
                />
                {errors.fullname && <span className="error-text">{errors.fullname.message}</span>}
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className={`modern-input ${errors.email ? "error" : ""}`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  style={{ 
                    color: isimgtrue ? "white" : "black",
                    background: isimgtrue ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
                  }}
                />
                {errors.email && <span className="error-text">{errors.email.message}</span>}
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  className={`modern-textarea ${errors.quarries ? "error" : ""}`}
                  rows="4"
                  {...register("quarries", {
                    required: "Message is required",
                    minLength: { value: 10, message: "Min 10 chars" },
                  })}
                  style={{ 
                    color: isimgtrue ? "white" : "black",
                    background: isimgtrue ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
                  }}
                ></textarea>
                {errors.quarries && <span className="error-text">{errors.quarries.message}</span>}
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
