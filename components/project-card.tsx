"use client"

import { useState } from "react"
import type { Project } from "./projects-section"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative h-96 rounded-xl overflow-hidden border border-primary/20 hover:border-primary/60 transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
        style={{ backgroundImage: `url('${project.image}')`, transform: isHovered ? "scale(1.1)" : "scale(1)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6 z-10">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-primary/20 border border-primary/40 text-primary font-medium group-hover:bg-primary/40 transition-colors"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-xs text-foreground/60">+{project.tags.length - 3}</span>
          )}
        </div>

        {/* Title and description */}
        <div>
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-foreground/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <a
              href={project.github}
              className="px-3 py-1 text-sm rounded-full bg-primary/20 border border-primary/40 text-primary hover:bg-primary/40 transition-colors"
            >
              Code
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              className="px-3 py-1 text-sm rounded-full bg-accent/20 border border-accent/40 text-accent hover:bg-accent/40 transition-colors"
            >
              Live
            </a>
          )}
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}
