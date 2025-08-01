import React, { useContext, useRef, useState } from "react";
import ig from "../assets/instagram-svgrepo-com.svg";
import fb from "../assets/facebook-svgrepo-com (1).svg";
import github from "../assets/github-repo-git-octocat-svgrepo-com.svg";
import linkedin from "../assets/linkedin-svgrepo-com.svg";
import "./Contact.css";
import { ChangeContext } from "../App";
import { useForm } from "react-hook-form";
import { sendData } from "../Authservice/Auth";




const Contact = () => {
  const { isimgtrue, setbool } = useContext(ChangeContext);
  const [toast,setToast] = useState(false)
  const [teastmsg, settoastMsg] = useState()
 
  const [succes, setSucces] = useState(false)


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting}
  } = useForm();

  async function onsubmit(e) {
   
   try {
     const res = await sendData(e)
    console.log(res.data)
    setToast(false)
    
    setSucces(true)

    setTimeout(() => {
      setSucces(false)
    }, 4000);

    
    

    
  


   } catch (err) {
    console.log(err.response?.data?.message  || "Something went wrong")

    settoastMsg(err.response?.data?.message || "Something went wrong")
    setToast(true)

    


    


   }
   
   await new Promise(resolve =>setTimeout(resolve,2000))

   reset();
    
  }


   

  
 



  return (
    <div className="contact-page">
       <div className={toast?'toast active':'toast'} >{teastmsg}</div>
       <div className={succes?' succes-msg active':'succes-msg'} >Sent Successfully i'll  contact you in some time</div>
      <div className="page-heading">
        <h1>Contact Me</h1>
        <p>I will answer your Questions</p>
      </div>

     

      <div
        className="form-fill"
        style={{ color: isimgtrue ? "white" : "black" }}
      >
        <form onSubmit={handleSubmit(onsubmit)}>
          <div>
            <label> Whats your Full Name ?</label>
            <input
              className={errors.fullname ? "firstnameactive" : ""}
              {...register("fullname", {
                required: true,
                minLength: { value: 3, message: "Must have 3 letters" },
              })}
              style={{ color: isimgtrue ? "white" : "black" }}
            />
            {errors.fullname && <p>{errors.fullname.message}</p>}
          </div>
          <div>
            <label> Your Email ID </label>
            <input
              type="email"
              className={errors.email?'emailactive':''}
              {...register("email",{
                required:true,
                minLength:{value:1, message:'This field is required'}
              }
              )}
              style={{ color: isimgtrue ? "white" : "black" }}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label> Have any quarries ? </label>
            <textarea
              className={errors.quarries? 'quarriesactive':''}
              {...register("quarries",{
                required:true,
                minLength:{value:10, message:'Message should contain atleast 10 letters'}
              })}
              style={{ color: isimgtrue ? "white" : "black" }}
            ></textarea>{errors.quarries && <p>{errors.quarries.message}</p>}
            
          </div>
          <div>
            <button  type="submit"  className="submit-btn" disabled={isSubmitting} >{isSubmitting? 'Submitting..' : 'Submit'}</button>
          </div>
        </form>
      </div>

      <div className="social-handles">
        <a href="https://facebook.com">
          <img src={fb} alt="" />
        </a>
        <a href="https://instagram.com" className="ig-position">
          <img src={ig} alt="" />
        </a>
        <a href="https://linkedin.com" className="lin-position">
          <img src={linkedin} alt="" />
        </a>
        <a href="https://github.com" className="git-position">
          <img src={github} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
