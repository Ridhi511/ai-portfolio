import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import { SiMongodb, SiCplusplus } from "react-icons/si";
import "./Skills.css";

interface Skill {
  name: string;
  level: number;
  icon: any; // bypass strict JSX typing
}

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);
  }, []);

  const skills: Skill[] = [
    { name: "React", level: 90, icon: FaReact },
    { name: "Node.js", level: 85, icon: FaNodeJs },
    { name: "Python", level: 88, icon: FaPython },
    { name: "Java", level: 80, icon: FaJava },
    { name: "MongoDB", level: 85, icon: SiMongodb },
    {name:"C", level: 80, icon: SiCplusplus},
    { name: "C++", level: 75, icon: SiCplusplus },
    { name: "Git", level: 90, icon: FaGitAlt },
    { name: "Docker", level: 70, icon: FaDocker },
    {name:"NumPy", level: 80, icon: FaPython},
    {name:"Pandas", level: 80, icon: FaPython},
    {name:"TensorFlow", level: 70, icon: FaPython},
    {name:"Matplotlib", level: 75, icon: FaPython},
    {name:"Scikit-learn", level: 80, icon: FaPython},
    {name:"Data Structures & Algorithms", level: 85, icon: FaJava},
    {name:"SQL", level: 80, icon: SiMongodb},
    {name:"RESTful APIs", level: 85, icon: FaNodeJs},
    {name:"Model context Protocol", level: 80, icon: FaPython},
    {name:"LLMs", level: 75, icon: FaPython},
    {name:"Cloud Platforms (AWS, Azure, GCP)", level: 70, icon: FaDocker},
    {name:"express.js", level: 85, icon: FaNodeJs},


  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              {React.createElement(skill.icon, {
                size: 24,
                className: "skill-icon",
              })}
              <h3>{skill.name}</h3>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: animate ? `${skill.level}%` : "0%",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Skills;