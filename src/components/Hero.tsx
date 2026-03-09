const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span className="highlight">Sam March</span></h1>
          <h2 className="hero-subtitle">Software Developer</h2>
          <p className="hero-description">
            I build things for the web — from client-facing applications and internal tooling
            to automation workflows and process systems. I bring both technical skills and real
            leadership experience to everything I work on.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero