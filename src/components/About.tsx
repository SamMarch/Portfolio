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
              Software developer with a non-traditional path that's become a genuine advantage. After
              nearly a decade leading teams in hospitality, I made a deliberate move into tech —
              graduating from the University of Adelaide's Full Stack bootcamp with 97%. Since then
              I've built client-facing form systems, developed internal tools with React and Vite,
              created front-end SPAs, and documented end-to-end workflows at a professional level.
            </p>
            <p>
              I'm looking for roles where I can build real things that solve real problems — whether
              that's writing code, designing a system, or improving how a team works. I care about
              clean solutions, clear documentation, and getting things done properly.
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