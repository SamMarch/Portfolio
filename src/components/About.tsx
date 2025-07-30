const About = () => {
  const skills = {
    frontend: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Next.js"],
    backend: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"]
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a love for creating intuitive and 
              efficient web applications. With expertise in both frontend and backend technologies, 
              I enjoy tackling complex problems and turning ideas into reality.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="skills-section">
            <h3>My Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="skill-tags">
                  {skills.frontend.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <div className="skill-tags">
                  {skills.backend.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Tools & Others</h4>
                <div className="skill-tags">
                  {skills.tools.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About