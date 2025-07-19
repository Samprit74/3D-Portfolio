import React from "react";
import { motion } from "framer-motion";
import "./ToolsAndSkills.css";
import { FaCode, FaClock, FaUsers, FaComments, FaBullseye } from "react-icons/fa";

const skills = [
  { name: "Problem Solving", icon: <FaBullseye /> },
  { name: "Time Management", icon: <FaClock /> },
  { name: "Teamwork", icon: <FaUsers /> },
  { name: "Communication", icon: <FaComments /> },
];

const learning = ["TypeScript", "Docker", "AWS", "GraphQL", "Next.js"];

const stack = [
  { tech: "JavaScript", level: 90 },
  { tech: "React", level: 85 },
  { tech: "Node.js", level: 80 },
  { tech: "MongoDB", level: 75 },
  { tech: "Express", level: 80 },
  { tech: "Python", level: 75 },
  { tech: "Git/Github", level: 90 },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ToolsAndSkills = () => {
  return (
    <>
      <motion.div
        className="skills-section tools-and-skills-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUpVariant}
      >
        {/* Tech Stack */}
        <div className="skills-left">
          <h2>Tech Stack</h2>
          {stack.map((item, i) => (
            <motion.div
              className="skill-bar"
              key={i}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="skill-info">
                <span>{item.tech}</span>
                <span>{item.level}%</span>
              </div>
              <div className="progress-bar">
                <div className="fill" style={{ width: `${item.level}%` }}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="skills-right">
          <h2>Soft Skills</h2>
          <div className="soft-skill-grid">
            {skills.map((s, i) => (
              <motion.div
                className="soft-skill-card"
                key={i}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="icon">{s.icon}</div>
                <p>{s.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="learning-section"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3>Currently Learning</h3>
            <div className="learning-tags">
              {learning.map((l, i) => (
                <span key={i} className="tag">
                  {l}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div style={{ height: "180px" }}></div>
    </>
  );
};

export default ToolsAndSkills;
