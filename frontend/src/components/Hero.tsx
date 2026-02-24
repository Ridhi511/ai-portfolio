import React from "react";
import "./Hero.css";
import profile from "../pages/me2.jpeg";
const Hero = () => {
  return (
    <div className="home-container">
      
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-left">
          <img
            src={profile}
            alt="Ridhi Garg"
            className="profile-img"
          />
        </div>

        <div className="hero-right">
          <h1>Hi, I'm Ridhi Garg 👋</h1>
          <h2>Full Stack Developer & AI Enthusiast</h2>

          <p>
            I'm a Computer Science Engineering student passionate about building
            scalable web applications and AI-powered systems. I specialize in
            MERN stack development ,Python Libraries ,Data Analysis and large language model integration.
          </p>

          <div className="hero-buttons">
            <a href="/projects" className="btn-primary">View Projects</a>
            <a href="/skills" className="btn-secondary">Explore Skills</a>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      {/* ACHIEVEMENTS */}
<section className="achievements">
  <h2>ACHIEVEMENTS</h2>

  <div className="achievement-item">
    <h3>Winner – Hackoacalypse (MLSA Hackathon)</h3>
    <p>
      Led the development of an AI-powered solution that addressed real-world
      problem statements. Recognized for innovation, technical implementation,
      and impactful solution design among competing teams.
    </p>
  </div>

  <div className="achievement-item">
    <h3>50+ LeetCode Problems Solved</h3>
    <p>
      Strengthened problem-solving skills across arrays, strings, recursion,
      trees, and data structures. Developed strong foundations in algorithmic
      thinking and optimization.
    </p>
  </div>
</section>

      {/* CERTIFICATIONS */}
      {/* CERTIFICATIONS */}
<section className="certifications">
  <h2> CERTIFICATIONS </h2>

  <div className="cert-item">
    <h3>MERN Full Stack Development</h3>
    <p>
      Gained hands-on experience building scalable web applications using
      MongoDB, Express.js, React.js, and Node.js. Developed RESTful APIs and
      implemented authentication and real-time features.
    </p>
  </div>

  <div className="cert-item">
    <h3>Oracle Cloud Infrastructure – Gen AI Professional</h3>
    <p>
      Certified in deploying and managing AI-powered solutions on Oracle Cloud.
      Demonstrated expertise in generative AI services and cloud-based AI
      integration.
    </p>
  </div>

  <div className="cert-item">
    <h3>Frontend Development</h3>
    <p>
      Mastered responsive UI design, component-based architecture, and modern
      styling techniques to create clean and user-friendly interfaces.
    </p>
  </div>

  <div className="cert-item">
    <h3>Business Ethics & Corporate Governance</h3>
    <p>
      Developed understanding of professional responsibility, corporate
      structures, and ethical decision-making in technical and business
      environments.
    </p>
  </div>
</section>

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

export default Hero;