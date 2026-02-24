import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Tasty Burger – MERN E-Commerce App",
      description:
        "A full-stack MERN e-commerce application with authentication, real-time order tracking, and admin dashboard for managing users and orders.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Ridhi511",
      live: "#",
    },
    {
      title: "District Query System with LLM",
      description:
        "AI-powered system integrating FAISS search indexing and Groq LLM to answer district-level data queries with contextual intelligence.",
      tech: ["Python", "LangChain", "FAISS", "Groq API"],
      github: "https://github.com/Ridhi511",
      live: "#",
    },
    {
      title: "AI Smart Tourism Platform",
      description:
        "MERN-based tourism platform with AI chatbot assistance, itinerary planning, and blockchain-powered fraud detection.",
      tech: ["React", "Node.js", "MongoDB", "AI Integration"],
      github: "https://github.com/Ridhi511",
      live: "#",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-heading">My Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* FOOTER */}
      <footer className="footer">
        <p>📧 ridhigarg511@gmail.com</p>
        <div className="social-links">
          <a href="https://github.com/Ridhi511" target="blank">GitHub</a>
          <a href="https://linkedin.com/in/ridhi-garg-869ab52aa" target="blank">LinkedIn</a>
        </div>
        <p className="copyright">© 2026 Ridhi Garg</p>
      </footer>
    </div>
  );
};

export default Projects;