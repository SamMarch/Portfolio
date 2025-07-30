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
    title: "Project One",
    description: "Description of your first project. Update this with your actual project details.",
    technologies: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://project-one.example.com",
    imageUrl: "/images/project1.png"
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description of your second project. Update this with your actual project details.",
    technologies: ["Python", "Django", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/project-two",
    imageUrl: "/images/project2.png"
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of your third project. Update this with your actual project details.",
    technologies: ["JavaScript", "Express", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project-three",
    liveUrl: "https://project-three.example.com",
    imageUrl: "/images/project3.png"
  }
]