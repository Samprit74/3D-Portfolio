import { faReact, faHtml5, faCss3, faJs,faNodeJs, faGitAlt, faGit, faGithub, faJava } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// icons up
import React, { useRef, useState } from 'react'
import "./Services.css"
import ComputerModelContainer from '../education/computer/ComputerModelContainer'
//import PlaystationModelContainer from './playstation5/PlaystationModelContainer'
import CupModelContainer from '../education/cup/CupModelController'
import Counter from '../education/Counter'
import { stagger, useInView } from 'framer-motion'
import { motion } from "motion/react"
import PlaystationModelContainer from '../education/playstation5/PlaystationModelContainer'


const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    title: "Frontend Development",
    icon: faReact,
    counter: 3,
    technologies: [
      { type: "icon", value: faReact },
      { type: "icon", value: faJs },
      { type: "icon", value: faCss3 },
      { type: "icon", value: faGitAlt },
      { type: "icon", value: faGithub },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    icon: faServer,
    counter: 4,
    technologies: [
      { type: "icon", value: faNodeJs },
      { type: "icon", value: faJava },
      { type: "img", value: "/express.svg" }, // image-based Express icon
    ],
  },
  {
    id: 3,
    title: "Database Management",
    icon: faDatabase,
    counter: 3,
    technologies: [
      { type: "img", value: "/mysql.svg" },
      { type: "img", value: "/mongodb.svg" },
      { type: "img", value: "/postgresql.svg" },
    ],
  },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isView = useInView(ref, { margin: "-200px" })
  return (

    <div className='services' ref={ref}>
      <div className="section left">
        <motion.h1 variants={textVariants}
          animate={isView ? "animate" : "initial"} className='sTitle'>
          How can i help?
        </motion.h1>
        {/* //map start */}
        <motion.div
          variants={listVariants}
          animate={isView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <FontAwesomeIcon icon={service.icon} size="2x" />
              </div>

              <div className="serviceInfo">
                <h2>{service.title}</h2>

                <div className="techIcons" style={{ display: "flex", marginTop: "8px" }}>
                  {service.technologies.map((tech, index) =>
                    tech.type === "icon" ? (
                      <FontAwesomeIcon
                        key={index}
                        icon={tech.value}
                        size="lg"
                        style={{ marginRight: "8px" }}
                      />
                    ) : (
                      <img
                        key={index}
                        src={tech.value}
                        alt="tech"
                        style={{
                          width: "22px",
                          height: "22px",
                          marginRight: "8px",
                          objectFit: "contain",
                        }}
                      />
                    )
                  )}
                </div>

                <h3 style={{ marginTop: "10px" }}>{service.counter} projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* map ends// */}
        <div className="counterList">
          <Counter from={0} to={40} text="monts of experiance" />
          <Counter from={0} to={12} text="Projects completed" />
        </div>
        {/* scroll */}

        <motion.div
          className="scrollWrapper"
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


        {/* scroll */}
      </div>
      <div className="section right">{
        currentServiceId === 1 ? (<ComputerModelContainer />) : currentServiceId === 2 ? (<CupModelContainer />) : <PlaystationModelContainer />

      }</div>
    </div>
  )
}

export default Services