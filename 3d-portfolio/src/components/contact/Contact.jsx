import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import { motion, useInView } from "framer-motion"
import PlanetModelContainer from './planet/PlanetModelContainer';


const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};
const Contact = () => {
  
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
    const sectionRef = useRef(); // for in-view animation
  const formRef = useRef();    // for emailjs submission
  const isInView = useInView(sectionRef, { margin: "-200px" });


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY
        }
      )
      .then(
        () => {
          setSuccess(true)
          setError(false)
          form.current.reset();
        },
        (error) => {
          setError(true)
          setSuccess(false)
          console.error("EmailJS Error:", error?.text || error);
        },
      );
  };


  return (
    <div className='contact'>

      <div className="cSection" ref={sectionRef}>
       
        <motion.form ref={formRef} onSubmit={sendEmail} variants={listVariant} animate={isInView ? "animate" : "initial"}>
          <motion.h1 className='cTitle' variants={listVariant}>Let's keep in touch</motion.h1>
          <motion.div className="formItem" variants={listVariant}>
            <label>Name</label>
            <input type="text" placeholder='John Doe' name='name'></input>
          </motion.div>

          <motion.div className="formItem" variants={listVariant}>
            <label>Email</label>
            <input type="email" placeholder='john@gmail.com' name='email'></input>
          </motion.div>

          <motion.div className="formItem" variants={listVariant}>
            <label>Message</label>
            <textarea rows={10} placeholder='Write whats on your mind...' name='message' ></textarea>
          </motion.div>

          <motion.button className='formBtn' variants={listVariant} >send</motion.button>
          {success && <span>Your message has been sent!</span>}

          {error && <span>Something went wrong!</span>}
        </motion.form>
      </div>
      <div className="cSection">
        
        <PlanetModelContainer/>
        </div>
      
    </div>
  )
}

export default Contact
