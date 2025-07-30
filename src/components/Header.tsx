const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <h1 className="logo">Your Name</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Home</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>Projects</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header