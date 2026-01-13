"use client"

import { useEffect, useState } from "react"
import TypingText from "./typing-text"

interface HeroSectionProps {
  isLoaded: boolean
}

export default function HeroSection({ isLoaded }: HeroSectionProps) {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (isLoaded) {
      setShowContent(true)
    }
  }, [isLoaded])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20">
      {/* Gradient overlay background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-black leading-tight text-balance bg-gradient-to-r from-gray-400 via-slate-200 to-gray-300 bg-clip-text text-transparent">
                  <TypingText
                    text="Mohammed Razin CR"
                    speed={80}
                    className=""
                  />
                </h1>
                <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-300 to-slate-300 bg-clip-text text-transparent text-balance">Frontend Developer & UI/UX Designer</h2>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl text-balance font-medium">
                I create stellar web experiences with modern technologies. Specializing in front-end development, I build interfaces that are both beautiful and functional. BCA graduate currently pursuing MCA, passionate about creating responsive websites and exceptional user experiences.
              </p>
            </div>

            <div
              className={`flex gap-4 transition-all duration-1000 delay-500 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <a
                href="#projects"
                className="group relative px-8 py-3 bg-gradient-to-r from-gray-400 via-slate-300 to-gray-300 text-slate-900 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-400/50"
              >
                {/* Animated shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-40 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-500" />
                
                {/* Animated border glow */}
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-400 via-slate-300 to-gray-300 opacity-0 group-hover:opacity-20 blur-lg -z-10 transition-opacity duration-300" />
                
                <span className="relative flex items-center gap-2">
                  View Projects
                  <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="group relative px-8 py-3 border-2 border-gray-400 text-gray-300 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:text-slate-900"
              >
                {/* Animated background fill */}
                <span className="absolute inset-0 bg-gradient-to-r from-gray-400 via-slate-300 to-gray-300 -z-10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-lg" />
                
                <span className="relative">Contact Me</span>
              </a>
            </div>

            {/* Tech stack preview */}
            <div
              className={`flex flex-wrap gap-3 pt-8 transition-all duration-1000 delay-700 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {["HTML5", "CSS3", "JavaScript", "Python", "UI/UX Design", "Responsive Design"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-sm text-primary font-medium hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right side - Visual element */}
          <div
            className={`relative h-96 transition-all duration-1000 delay-500 ${showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-3xl animate-pulse-glow" />
            <div className="relative h-full border border-blue-500/20 rounded-2xl backdrop-blur-sm bg-background/30 flex items-center justify-center overflow-hidden">
              {/* Animated gradient circle */}
              <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-30 animate-float" />

              {/* Code visualization */}
              <div className="relative z-10 font-mono text-sm space-y-3 text-center px-6">
                <div className="text-gray-400 animate-code-glow" style={{ animationDelay: '0s' }}>
                  {"<"}/Developer{">"}
                </div>
                <div className="text-slate-300 animate-code-glow" style={{ animationDelay: '0.3s' }}>
                  skills: [MERN, ...]
                </div>
                <div className="text-foreground/60 animate-code-glow" style={{ animationDelay: '0.6s' }}>
                  passion: building
                </div>
                <div className="text-gray-400 animate-code-glow" style={{ animationDelay: '0.9s' }}>
                  {"<"}/Developer{">"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => {
            const element = document.querySelector("#projects")
            element?.scrollIntoView({ behavior: "smooth", block: "start" })
          }}
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 cursor-pointer group ${showContent ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400 group-hover:text-slate-300 transition-colors">Scroll to explore</span>
            <div className="relative w-6 h-10 border-2 border-gray-400 group-hover:border-slate-300 rounded-full flex justify-center transition-colors">
              <div className="w-1 h-2 bg-gradient-to-b from-gray-400 to-slate-300 rounded-full mt-2 animate-bounce" style={{ animationDuration: "1.5s" }} />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 border-2 border-slate-300 rounded-full opacity-0 group-hover:opacity-50 blur-sm transition-opacity" />
            </div>
          </div>
        </button>
      </div>
    </section>
  )
}
