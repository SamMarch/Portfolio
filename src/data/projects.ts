export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  imageUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and TypeScript to showcase my projects and skills.",
    technologies: ["React", "TypeScript", "Vite", "CSS3"],
    githubUrl: "https://github.com/SamMarch/Portfolio",
    liveUrl: "https://sammarch.github.io/Portfolio/",
    imageUrl: "/images/portfolio.png"
  }
  // More projects coming soon!
]