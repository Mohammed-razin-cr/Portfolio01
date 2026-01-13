"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-slate-700 animate-pulse" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/10"
      aria-label="Toggle theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Animated background glow */}
      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-400 via-slate-300 to-gray-300 opacity-0 group-hover:opacity-10 blur-lg -z-10 transition-opacity duration-300" />
      
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun icon - visible in light mode */}
        <Sun
          className="absolute w-5 h-5 text-yellow-400 transition-all duration-300 rotate-0 scale-100 dark:scale-0 dark:rotate-90"
          strokeWidth={2}
        />
        
        {/* Moon icon - visible in dark mode */}
        <Moon
          className="absolute w-5 h-5 text-blue-300 transition-all duration-300 rotate-90 scale-0 dark:scale-100 dark:rotate-0"
          strokeWidth={2}
        />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 text-slate-300 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {theme === "dark" ? "Light mode" : "Dark mode"}
      </div>
    </button>
  )
}
