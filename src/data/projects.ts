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
    title: "Affirming Minds",
    description: "A professional telehealth psychology practice website offering neuro-affirming and LGBTQIA+ affirmative care across Australia. Built with a focus on performance, accessibility, and clean design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/SamMarch/affirming-minds",
    liveUrl: "https://affirmingminds.com.au/",
    imageUrl: "./images/Affirming Minds Landing Page.png"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and TypeScript to showcase my projects and skills.",
    technologies: ["React", "TypeScript", "Vite", "CSS3"],
    githubUrl: "https://github.com/SamMarch/Portfolio",
    liveUrl: "https://sammarch.github.io/Portfolio/",
    imageUrl: "./images/portfolio.png"
  }
]