import React, { useRef } from "react";
import "./Hero.css";
import { motion, useInView } from "framer-motion";
import Speech from "./Speech";
import Shape from "./Shape";
import { Canvas } from "@react-three/fiber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const awardVariants = {
  hidden: { x: "33vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const followVariants = {
  hidden: { x: "33vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const Hero = ({ onScrollToContact }) => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: false });

  return (
    <div className="hero" id="hero" ref={heroRef}>
      <div className="herosection left">
        <motion.h1
          initial={{ x: "33vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,<br />
          <span>I'm Samprit!</span>
        </motion.h1>

        <motion.div
          variants={awardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="award"
        >
          <motion.h2 variants={awardVariants}>Full-Stack Developer</motion.h2>
          <motion.p variants={awardVariants}>
            B.Tech CSE student at GNIT with hands-on MERN stack experience.
            Passionate about clean code, web development, and continuous learning
            through real-world projects.
          </motion.p>
          <motion.div variants={awardVariants} className="awardList">
            <a href="https://www.linkedin.com/in/sampritroy99/" target="_blank" rel="noopener noreferrer">
              <motion.div variants={awardVariants} className="icon-button">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </motion.div>
            </a>
            <a href="https://github.com/Samprit74" target="_blank" rel="noopener noreferrer">
              <motion.div variants={awardVariants} className="icon-button">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </motion.div>
            </a>
            <a href="https://twitter.com/sampritroy99" target="_blank" rel="noopener noreferrer">
              <motion.div variants={awardVariants} className="icon-button">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="scrollWrapper"
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <div className="scrollLink" style={{ cursor: "pointer" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 9C5 5.134 8.134 2 12 2s7 3.134 7 7v6c0 3.866-3.134 7-7 7s-7-3.134-7-7V9z" stroke="white" strokeWidth="1" />
              <motion.path
                animate={{ y: [0, 5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                d="M12 5v3"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      <div className="herosection right">
        <motion.div
          className="follow"
          variants={followVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.a
            href="https://www.instagram.com/samprit_roy/profilecard/?igsh=MXg3aG8za2E4enl1OQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcon instagram"
            variants={followVariants}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </motion.a>
          <motion.a href="https://www.facebook.com/" target="_blank" className="socialIcon facebook" variants={followVariants}>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </motion.a>
          <motion.a
            href="https://youtube.com/@samprit_contents?si=r9ch1odWl6rfPm2n"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcon youtube"
            variants={followVariants}
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </motion.a>

          <motion.div className="followTextContainer" variants={followVariants}>
            <div className="followtext">Follow Me</div>
          </motion.div>
        </motion.div>

        <Speech />

        <motion.div
          className="certificate"
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
          transition={{ duration: 1 }}
        >
          <a href="https://drive.google.com/file/d/1Thsyz6h9cUqcB_aL0K-yIFCnXj99qoMJ/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">

            <img src="/cv.png" alt="Certificate" className="certificate" />
          </a>
          Final year Btech Student<br /> at GNIT in<br /> Computer Science & Engineering
        </motion.div>

        <motion.div
          className="contactBTN"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" width="160" height="160" xmlns="http://www.w3.org/2000/svg">
            {/* Outer rotating circle */}
            <circle cx="100" cy="100" r="90" fill="pink" />

            {/* Text path circle */}
            <path
              id="innerCirclePath"
              fill="none"
              stroke="white"
              strokeWidth="5"
              d="M100,100 m-60,0 a60,60 0 1,1 120,0 a60,60 0 1,1 -120,0"
            />
            <text className="circleText">
              <textPath href="#innerCirclePath">Hire Now *</textPath>
            </text>
            <text className="circleText">
              <textPath href="#innerCirclePath" startOffset="46%">Contact Me</textPath>
            </text>

            {/* Centered telephone icon */}
            <motion.g
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Adjusted transform for perfect center */}
              <g transform="translate(42
      ,62) scale(2.6)">
                <path
                  d="M15.05 3.95a2.5 2.5 0 0 1 3.54 0l2.46 2.46a2.5 2.5 0 0 1 0 3.54l-2.18 2.18c-.26.26-.32.66-.15.99a16.07 16.07 0 0 0 3.29 4.4 16.07 16.07 0 0 0 4.4 3.29c.33.17.73.1.99-.15l2.18-2.18a2.5 2.5 0 0 1 3.54 0l2.46 2.46a2.5 2.5 0 0 1 0 3.54l-1.68 1.68a4.5 4.5 0 0 1-4.85 1.03 29.9 29.9 0 0 1-11.52-7.42 29.9 29.9 0 0 1-7.42-11.52 4.5 4.5 0 0 1 1.03-4.85l1.68-1.68z"
                  fill="none"
                  stroke="black"
                  strokeWidth="1.5"
                />
              </g>
            </motion.g>
          </svg>
        </motion.div>

      </div>

      <div className="bg">
        <Canvas>
          <Shape />
        </Canvas>
        <div className="hImg">
          <img src="/bussiness-man.png" className="profile-pic" alt="Samprit Roy" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
