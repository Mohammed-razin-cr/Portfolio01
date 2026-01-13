"use client"

import { useEffect, useState } from "react"
import FloatingLines from "./floating-lines"

interface PageLoaderProps {
  isLoading: boolean
}

export default function PageLoader({ isLoading }: PageLoaderProps) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShow(false), 600)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (!show) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Animated background with floating lines effect */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingLines
          linesGradient={["#171717", "#ffffff"]}
          animationSpeed={1.5}
          interactive={true}
          bendRadius={6}
          bendStrength={-0.5}
          mouseDamping={0.05}
          parallax={true}
          parallaxStrength={0.2}
        />
      </div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8">
        {/* Animated loader circle */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
          {/* Outer rotating ring */}
          <div 
            className="absolute inset-0 rounded-full border-3 sm:border-4 border-transparent border-t-gray-400 border-r-gray-300" 
            style={{ animation: "spin 4s linear infinite" }} 
          />

          {/* Middle rotating ring */}
          <div
            className="absolute inset-2 sm:inset-3 rounded-full border-3 sm:border-4 border-transparent border-b-slate-300 border-l-gray-400"
            style={{ animation: "spin 5s linear infinite reverse" }}
          />

          {/* Inner pulsing circle */}
          <div className="absolute inset-4 sm:inset-6 rounded-full border-2 border-gray-400" style={{ animation: "pulse 3s ease-in-out infinite" }} />

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-gray-300 to-slate-300 rounded-full" style={{ animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite" }} />
          </div>
        </div>

        {/* Bouncing dots animation */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="flex gap-1 sm:gap-1.5">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full" style={{ animation: "bounce 1.4s infinite", animationDelay: "0s" }} />
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full" style={{ animation: "bounce 1.4s infinite", animationDelay: "0.2s" }} />
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full" style={{ animation: "bounce 1.4s infinite", animationDelay: "0.4s" }} />
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-32 sm:w-40 md:w-48 h-0.5 sm:h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gray-400 to-slate-300 rounded-full"
            style={{
              animation: "progress 3s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%, 80%, 100% {
            opacity: 0.4;
            transform: translateY(0);
          }
          40% {
            opacity: 1;
            transform: translateY(-8px);
          }
        }

        @keyframes ping {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          75%, 100% {
            opacity: 0;
            transform: scale(2);
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          50% {
            width: 100%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </div>
  )
}
