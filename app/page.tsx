"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import TimelineSection from "@/components/timeline-section"
import CertificationsSection from "@/components/certifications-section"
import GitHubSection from "@/components/github-section"
import SocialLinks from "@/components/social-links"
import ParticleBackground from "@/components/particle-background"
import PageLoader from "@/components/page-loader"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf" // Make sure to add your resume.pdf to public folder
    link.download = "resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <PageLoader isLoading={!isLoaded} />
      <ParticleBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/30 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-gray-300 to-slate-200 bg-clip-text text-transparent">
            Dev Portfolio
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#projects" className="text-gray-300 hover:text-slate-200 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-gray-300 hover:text-slate-200 transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-gray-300 hover:text-slate-200 transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-gray-300 hover:text-slate-200 transition-colors">
              Contact
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <button
              onClick={downloadResume}
              className="px-4 py-2 bg-gradient-to-r from-gray-400 to-slate-300 text-black rounded-lg text-sm font-bold hover:shadow-lg hover:shadow-gray-500/30 transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </button>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <div className="relative z-10">
        <HeroSection isLoaded={isLoaded} />
        <ProjectsSection />
        <SkillsSection />
        <TimelineSection />
        <CertificationsSection />
        <GitHubSection />
        <SocialLinks />
      </div>
    </main>
  )
}
