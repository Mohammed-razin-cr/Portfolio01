"use client"

import { useEffect, useRef, useState } from "react"

interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  credential?: string
  icon: string
}

const certifications: Certification[] = [
  {
    id: "1",
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credential: "https://aws.amazon.com",
    icon: "☁️",
  },
  {
    id: "2",
    name: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "2022",
    credential: "https://google.com",
    icon: "🔵",
  },
  {
    id: "3",
    name: "MongoDB Developer Certification",
    issuer: "MongoDB",
    date: "2022",
    credential: "https://mongodb.com",
    icon: "🍃",
  },
  {
    id: "4",
    name: "React Advanced Patterns",
    issuer: "Coursera",
    date: "2021",
    credential: "https://coursera.org",
    icon: "⚛️",
  },
  {
    id: "5",
    name: "Python for Data Science",
    issuer: "NPTEL",
    date: "2021",
    credential: "https://nptel.ac.in",
    icon: "🐍",
  },
  {
    id: "6",
    name: "Full Stack Development Specialization",
    issuer: "Coursera",
    date: "2020",
    credential: "https://coursera.org",
    icon: "🔧",
  },
]

function CertificationCard({ cert, index }: { cert: Certification; index: number }) {
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

  return (
    <div
      ref={ref}
      className="group relative"
      style={{
        animation: isVisible ? `slideInUp 0.6s ease-out ${index * 0.1}s both` : "none",
      }}
    >
      <div className="relative p-6 rounded-xl border border-primary/20 hover:border-primary/60 transition-all duration-300 bg-background/50 hover:bg-background/80 backdrop-blur-sm h-full">
        {/* Spotlight effect */}
        <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur" />

        <div className="flex items-start gap-4 mb-4">
          <div className="text-3xl">{cert.icon}</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {cert.name}
            </h4>
            <p className="text-sm text-accent font-medium">{cert.issuer}</p>
          </div>
        </div>

        <p className="text-sm text-foreground/60 mb-4">Earned in {cert.date}</p>

        {cert.credential && (
          <a
            href={cert.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-1 text-xs rounded-full bg-primary/20 border border-primary/40 text-primary hover:bg-primary/40 transition-colors"
          >
            View Credential
          </a>
        )}

        {/* Background glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  )
}

export default function CertificationsSection() {
  return (
    <section className="relative py-20 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Certifications & Credentials</h2>
          <p className="text-foreground/60 text-lg">
            Professional certifications from industry leaders demonstrating expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
