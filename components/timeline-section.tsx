"use client"

import { useEffect, useRef, useState } from "react"

interface TimelineEvent {
  year: string
  title: string
  company?: string
  description: string
  type: "education" | "experience" | "achievement"
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2023",
    title: "Senior Full Stack Developer",
    company: "Tech Innovation Labs",
    description:
      "Leading development of enterprise-scale applications with a focus on MERN stack and cloud architecture.",
    type: "experience",
  },
  {
    year: "2022",
    title: "AWS Solutions Architect Certification",
    description: "Successfully completed AWS certification demonstrating cloud infrastructure expertise.",
    type: "achievement",
  },
  {
    year: "2021",
    title: "Full Stack Developer",
    company: "Digital Solutions Inc",
    description: "Developed and maintained multiple production applications using React, Node.js, and MongoDB.",
    type: "experience",
  },
  {
    year: "2020",
    title: "Google Developer Certification",
    description: "Completed Google's professional developer certification in web technologies.",
    type: "achievement",
  },
  {
    year: "2019",
    title: "B.S. in Computer Science",
    description: "Graduated with honors in Computer Science, specializing in software engineering.",
    type: "education",
  },
  {
    year: "2018",
    title: "Junior Developer",
    company: "StartUp Ventures",
    description: "Started professional development career building responsive web applications.",
    type: "experience",
  },
]

function TimelineItem({
  event,
  index,
  isLeft,
}: {
  event: TimelineEvent
  index: number
  isLeft: boolean
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  const typeColors = {
    experience: "from-primary to-blue-500",
    education: "from-accent to-cyan-500",
    achievement: "from-green-400 to-emerald-500",
  }

  return (
    <div
      ref={ref}
      className={`mb-8 flex ${isLeft ? "flex-row" : "flex-row-reverse"} gap-8 items-center`}
      style={{
        animation: isVisible ? `slideInUp 0.6s ease-out ${index * 0.1}s both` : "none",
      }}
    >
      {/* Content */}
      <div className="flex-1">
        <div className="group relative p-6 rounded-xl border border-primary/20 hover:border-primary/60 transition-all duration-300 bg-background/50 hover:bg-background/80 backdrop-blur-sm">
          <div
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 bg-gradient-to-r ${typeColors[event.type]} bg-clip-text text-transparent border border-primary/20`}
          >
            {event.type === "experience" ? "Experience" : event.type === "education" ? "Education" : "Achievement"}
          </div>

          <h4 className="text-lg font-bold text-foreground mb-1">{event.title}</h4>
          {event.company && <p className="text-sm text-primary font-medium mb-2">{event.company}</p>}
          <p className="text-foreground/60 text-sm leading-relaxed">{event.description}</p>

          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>

      {/* Center dot and line */}
      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full bg-gradient-to-r ${typeColors[event.type]} ring-4 ring-background relative z-10 animate-pulse-glow`}
        />
        {index < timelineEvents.length - 1 && (
          <div className="w-1 h-20 bg-gradient-to-b from-primary/60 to-primary/20 rounded-full" />
        )}
      </div>

      {/* Year label */}
      <div className="flex-1">
        <span className="text-2xl font-bold text-primary">{event.year}</span>
      </div>
    </div>
  )
}

export default function TimelineSection() {
  return (
    <section id="experience" className="relative py-20 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Journey & Milestones</h2>
          <p className="text-foreground/60 text-lg">
            A timeline of my professional growth, education, and major achievements
          </p>
        </div>

        <div className="space-y-2">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={`${event.year}-${index}`} event={event} index={index} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
