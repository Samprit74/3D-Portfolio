import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Computer2ModelContainer from '../education/computer/Computer2ModelContainer';
import CupModelContainer from '../education/cup/CupModelController';
import PlaystationModelContainer from '../education/playstation5/PlaystationModelContainer';
import "./Education.css"

const educationData = [
  {
    id: 1,
    title: "B.Tech in CSE",
    institution: "Guru Nanak Institute of Technology (MAKAUT)",
    score: "Above 70%",
    year: "2022 – 2026",
   
     bgColor: "#c43a4f",
    icon: "🎓",
  },
  {
    id: 2,
    title: "Higher Secondary (WBCHSE)",
    institution: "Bidhannagar Government High School",
    score: "Above 65%",



    
    year: "2020 – 2022",
     bgColor: "#368dd4d6",
    icon: "🏫",
  },
  {
    id: 3,
    title: "Secondary (WBBSE)",
    institution: "Bidhannagar Government High School",
    score: "Above 75%",
    year: "2010 – 2020",
    
    bgColor: "#025656",
    icon: "📘",
  },
];

const textVariants = {
  initial: { x: -100, y: -100, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const listVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.5 },
  },
};

const Education = () => {
  const [currentEducationId, setCurrentEducationId] = useState(1);
  const ref = useRef();
  const isView = useInView(ref, { margin: "-200px" });

  return (
    <div className='education-wrapper' ref={ref}>
      {/* Left Section */}
      <div className="education-left">
        <motion.h1
          variants={textVariants}
          animate={isView ? "animate" : "initial"}
          className="education-title"
        >
          My Education
        </motion.h1>

        <motion.div
          variants={listVariants}
          animate={isView ? "animate" : "initial"}
          className="education-list"
        >
          {educationData.map((edu) => (
            <motion.div
              variants={listVariants}
              className="education-card"
              key={edu.id}
              onClick={() => setCurrentEducationId(edu.id)}
              style={{ backgroundColor: edu.bgColor }}
            >
              <div className="education-icon" style={{ fontSize: "28px" }}>
                {edu.icon}
              </div>
              <div className="education-info">
                <h2>{edu.title}</h2>
                <h3>{edu.institution}</h3>
                <h3>{edu.score}</h3>
                <h3>{edu.year}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="scroll-wrapper"
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        >
          <div className="scroll-down-link" style={{ cursor: "pointer" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M5 9C5 5.134 8.134 2 12 2s7 3.134 7 7v6c0 3.866-3.134 7-7 7s-7-3.134-7-7V9z"
                stroke="white" strokeWidth="1" />
              <path d="M12 5v3" stroke="white" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="education-right">
        {currentEducationId === 1 ? (
          <Computer2ModelContainer />
        ) : currentEducationId === 2 ? (
          <CupModelContainer />
        ) : (
          <PlaystationModelContainer />
        )}
      </div>
    </div>
  );
};

export default Education;
