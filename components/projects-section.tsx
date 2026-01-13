"use client"

import { useState } from "react"
import ProjectCard from "./project-card"

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "AI Voice Assistant",
    description: "An AI-powered voice assistant that understands natural language, performs tasks, and integrates with system utilities. Built with speech recognition, text-to-speech, and custom command handlers to automate workflows.",
    image: "/ai-voice-assistant.jpg",
    tags: ["Python", "Speech Recognition", "NLP", "AI"],
    github: "https://github.com/Mohammed-razin-cr/AI-Voice-Assistant",
  },
  {
    id: "2",
    title: "Steganography Project",
    description: "A secure application that hides confidential data within images using encryption techniques, enhancing data privacy and protection.",
    image: "/steganography-project.jpg",
    tags: ["Python", "Tkinter", "Cryptography", "Security"],
    github: "https://github.com/Mohammed-razin-cr",
  },
  {
    id: "3",
    title: "Language Detection",
    description: "A language detection tool that identifies the language of input text using statistical models and machine learning. Useful for preprocessing and routing content in multilingual applications.",
    image: "/language-detection.jpg",
    tags: ["Python", "Machine Learning", "NLP", "AI"],
    github: "https://github.com/Mohammed-razin-cr/Language-Detection",
  },
  {
    id: "4",
    title: "College Website",
    description: "A fully responsive and modern website built for BCA students, featuring downloadable notes, subject playlists, event updates, and a dynamic UI. Awarded Best Website Design at the college level.",
    image: "/college-website.jpg",
    tags: ["HTML5", "CSS3", "JavaScript", "Web"],
    github: "https://github.com/Mohammed-razin-cr",
  },
  {
    id: "5",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing skills, projects, and achievements with smooth animations and dynamic content.",
    image: "/portfolio-website.jpg",
    tags: ["JavaScript", "CSS3", "HTML5", "Web Design"],
    link: "https://mohammed-razin-cr.me/",
  },
  {
    id: "6",
    title: "YouTube Content Creator",
    description: "Content creator with 2.6k+ subscribers, focusing on web development, tutorials, and tech reviews.",
    image: "/youtube-channel.jpg",
    tags: ["Video Editing", "Content Creation", "Web Development"],
    link: "https://www.youtube.com/channel/UCxxxxxx",
  },
]

const filters = ["All", "Python", "JavaScript", "HTML5", "CSS3", "AI", "Web", "NLP", "Machine Learning", "Security"]

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.tags.includes(activeFilter))

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-foreground/60 text-lg max-w-2xl">
            A selection of my recent work showcasing expertise in frontend development, AI/ML projects, and modern web design.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="mb-12 flex flex-wrap gap-3 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-gray-400 to-slate-300 text-black shadow-lg shadow-gray-500/50"
                  : "bg-gray-800 border border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60 text-lg">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}
