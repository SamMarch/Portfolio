const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span className="highlight">Sam March</span></h1>
          <h2 className="hero-subtitle">Aspiring Full Stack Developer</h2>
          <p className="hero-description">
            Passionate about coding and building web applications. Currently expanding my skills 
            in modern web technologies and working on exciting new projects.
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