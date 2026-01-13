"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface SocialLink {
  icon: React.ReactNode
  label: string
  url: string
  delay: number
}

export default function SocialLinks() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  const socialLinks: SocialLink[] = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      url: "https://github.com/Mohammed-razin-cr",
      delay: 0,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.814 0-9.752h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.61zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.958-1.71 1.187 0 1.915.755 1.937 1.71 0 .951-.75 1.71-1.98 1.71zm1.582 11.597H3.635V9.542h3.284v10.91zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mohammed-razin-cr-100b432a3/?originalSubdomain=in",
      delay: 0.1,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 002.856-3.9 9.86 9.86 0 01-2.794.856 4.958 4.958 0 0021.224 0c-.913-.537-1.793-1.136-2.694-1.796A9.87 9.87 0 0024 3.72v1c0 4.416-1.794 8.44-4.72 11.22-.945.832-1.983 1.558-3.084 2.158 1.064-.694 2.088-1.449 3.065-2.248.96-.801 1.891-1.656 2.786-2.558a10 10 0 01-14.19 1.31m-5.06-7.18a4.96 4.96 0 100-9.92 4.96 4.96 0 000 9.92z" />
        </svg>
      ),
      label: "Twitter",
      url: "https://x.com/razincr32",
      delay: 0.2,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: "Email",
      url: "mailto:razincr32@gmail.com",
      delay: 0.3,
    },
  ]

  return (
    <section
      ref={ref}
      className="relative py-20 px-4 border-t border-border bg-gradient-to-b from-background to-primary/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Contact section */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Let's Connect</h2>
          <p className="text-foreground/60 text-lg mb-8">
            Have a project in mind or want to collaborate? Get in touch through any of these channels.
          </p>

          <a
            href="mailto:razincr32@gmail.com"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-gray-400 to-slate-300 text-black font-bold hover:shadow-lg hover:shadow-gray-500/30 transition-all duration-300 hover:scale-105 mb-12"
          >
            Send me an Email
          </a>
        </div>

        {/* Social icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              style={{
                animation: isVisible ? `slideInUp 0.6s ease-out ${link.delay}s both` : "none",
              }}
            >
              <div className="p-4 rounded-full bg-primary/10 border border-primary/30 text-primary hover:text-foreground hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50">
                {link.icon}
              </div>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-foreground/50 text-sm">
            © 2026 Mohammed Razin CR. All rights reserved.
          </p>
          <p className="text-foreground/40 text-xs mt-2">
            Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  )
}
