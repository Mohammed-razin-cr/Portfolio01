"use client"

import { useEffect, useRef, useState } from "react"

interface Skill {
  category: string
  items: { name: string; proficiency: number }[]
}

const skillsData: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", proficiency: 95 },
      { name: "CSS3", proficiency: 90 },
      { name: "JavaScript", proficiency: 85 },
      { name: "Responsive Design", proficiency: 90 },
    ],
  },
  {
    category: "Design & UX",
    items: [
      { name: "UI/UX Design", proficiency: 85 },
      { name: "Figma", proficiency: 80 },
      { name: "User Research", proficiency: 75 },
      { name: "Prototyping", proficiency: 80 },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "JavaScript", proficiency: 85 },
      { name: "Python", proficiency: 80 },
      { name: "HTML5", proficiency: 95 },
      { name: "CSS3", proficiency: 90 },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", proficiency: 90 },
      { name: "VS Code", proficiency: 95 },
      { name: "Web Design", proficiency: 85 },
      { name: "Project Management", proficiency: 80 },
    ],
  },
]

function SkillBar({ name, proficiency }: { name: string; proficiency: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [displayProficiency, setDisplayProficiency] = useState(0)
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

  useEffect(() => {
    if (!isVisible) return

    let current = 0
    const interval = setInterval(() => {
      current += Math.random() * 20
      if (current >= proficiency) {
        setDisplayProficiency(proficiency)
        clearInterval(interval)
      } else {
        setDisplayProficiency(Math.min(current, proficiency))
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isVisible, proficiency])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-xs text-gray-500 font-semibold">{Math.round(displayProficiency)}%</span>
      </div>
      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
        <div
          className="h-full bg-gradient-to-r from-gray-400 via-slate-300 to-gray-400 rounded-full transition-all duration-500"
          style={{ width: `${displayProficiency}%` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-gray-300 to-slate-200 bg-clip-text text-transparent">Technical Skills</h2>
          <p className="text-gray-400 text-lg">Proficiency levels across different technology stacks and tools</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillsData.map((skillGroup, groupIndex) => (
            <div
              key={skillGroup.category}
              className="space-y-6 animate-slide-up"
              style={{ animationDelay: `${groupIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-gray-400 to-slate-300 rounded-full" />
                <h3 className="text-2xl font-bold text-gray-300">{skillGroup.category}</h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
