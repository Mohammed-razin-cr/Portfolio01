"use client"

import { useEffect, useState } from "react"

interface GitHubStats {
  followers: number
  repos: number
  contributions: number
  stars: number
}

interface GitHubRepo {
  id: string
  name: string
  description: string
  stars: number
  language: string
  url: string
}

export default function GitHubSection() {
  const [stats, setStats] = useState<GitHubStats>({
    followers: 1250,
    repos: 45,
    contributions: 3250,
    stars: 890,
  })

  const [repos, setRepos] = useState<GitHubRepo[]>([
    {
      id: "1",
      name: "MERN-Advanced-Pattern",
      description: "Advanced MERN stack patterns and best practices library",
      stars: 342,
      language: "JavaScript",
      url: "https://github.com",
    },
    {
      id: "2",
      name: "React-Component-Library",
      description: "Reusable React components with TypeScript",
      stars: 218,
      language: "TypeScript",
      url: "https://github.com",
    },
    {
      id: "3",
      name: "Node-API-Framework",
      description: "Lightweight Node.js API framework with built-in optimizations",
      stars: 156,
      language: "JavaScript",
      url: "https://github.com",
    },
  ])

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    // Simulate GitHub API fetch
    const animateStats = () => {
      const current = { followers: 0, repos: 0, contributions: 0, stars: 0 }
      const interval = setInterval(() => {
        current.followers = Math.min(current.followers + 50, stats.followers)
        current.repos = Math.min(current.repos + 2, stats.repos)
        current.contributions = Math.min(current.contributions + 100, stats.contributions)
        current.stars = Math.min(current.stars + 30, stats.stars)

        setStats({ ...current })

        if (current.followers === stats.followers) clearInterval(interval)
      }, 50)
    }

    if (isLoaded) animateStats()
  }, [])

  return (
    <section className="relative py-20 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">GitHub Activity</h2>
          <p className="text-foreground/60 text-lg">Open source contributions and popular repositories</p>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Followers", value: stats.followers, icon: "👥" },
            { label: "Repositories", value: stats.repos, icon: "📦" },
            { label: "Contributions", value: stats.contributions, icon: "💻" },
            { label: "Stars", value: stats.stars, icon: "⭐" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group relative p-6 rounded-xl border border-primary/20 hover:border-primary/60 transition-all duration-300 bg-background/50 hover:bg-background/80 backdrop-blur-sm animate-slide-up text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Featured repos */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-6">Featured Repositories</h3>

          {repos.map((repo, index) => (
            <a
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl border border-primary/20 hover:border-primary/60 transition-all duration-300 bg-background/50 hover:bg-background/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📄</span>
                  <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {repo.name}
                  </h4>
                </div>
                <div className="flex items-center gap-1 text-accent">
                  <span>⭐</span>
                  <span className="font-semibold">{repo.stars}</span>
                </div>
              </div>

              <p className="text-foreground/60 text-sm mb-3">{repo.description}</p>

              <div className="flex gap-2">
                <span className="px-2 py-1 text-xs rounded-full bg-primary/20 border border-primary/40 text-primary">
                  {repo.language}
                </span>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/Mohammed-razin-cr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-gray-400 to-slate-300 text-black font-bold hover:shadow-lg hover:shadow-gray-500/30 transition-all duration-300 hover:scale-105"
          >
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}
