"use client"

import { useRef, useEffect, useState } from "react"

interface FloatingLinesProps {
  linesGradient?: string[]
  animationSpeed?: number
  interactive?: boolean
  bendRadius?: number
  bendStrength?: number
  mouseDamping?: number
  parallax?: boolean
  parallaxStrength?: number
}

export default function FloatingLines({
  linesGradient = ["#171717", "#ffffff"],
  animationSpeed = 1.5,
  interactive = true,
  bendRadius = 6,
  bendStrength = -0.5,
  mouseDamping = 0.05,
  parallax = true,
  parallaxStrength = 0.2,
}: FloatingLinesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (interactive) {
        mousePos.current = { x: e.clientX, y: e.clientY }
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    let animationFrameId: number
    let time = 0

    const lines: Array<{ x: number; y: number; length: number; angle: number; speedOffset: number }> = []
    const lineCount = 20

    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: 20 + Math.random() * 60,
        angle: Math.random() * Math.PI * 2,
        speedOffset: Math.random() * Math.PI * 2,
      })
    }

    const animate = () => {
      time += 0.01 * animationSpeed

      ctx.fillStyle = "rgba(23, 23, 23, 0.03)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      const color1 = linesGradient[0] || "#171717"
      const color2 = linesGradient[1] || "#ffffff"
      gradient.addColorStop(0, color1)
      gradient.addColorStop(1, color2)
      ctx.strokeStyle = gradient
      ctx.lineWidth = 1.5
      ctx.globalAlpha = 0.6

      lines.forEach((line, index) => {
        const waveOffsetX = Math.sin(time * 0.5 + line.speedOffset) * bendRadius * bendStrength
        const waveOffsetY = Math.cos(time * 0.3 + line.speedOffset) * bendRadius * bendStrength

        let offsetX = 0
        let offsetY = 0

        if (interactive) {
          const dx = mousePos.current.x - line.x
          const dy = mousePos.current.y - line.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const angle = Math.atan2(dy, dx)
            const force = (1 - distance / 150) * bendStrength * 5
            offsetX = Math.cos(angle) * force
            offsetY = Math.sin(angle) * force
          }
        }

        const x1 = line.x + waveOffsetX + offsetX
        const y1 = line.y + waveOffsetY + offsetY

        const lineAngle = line.angle + Math.sin(time + line.speedOffset) * 0.5
        const x2 = x1 + Math.cos(lineAngle) * line.length
        const y2 = y1 + Math.sin(lineAngle) * line.length

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()

        // Update line position
        line.x += Math.sin(time * 0.2 + index) * 0.5
        line.y += Math.cos(time * 0.15 + index) * 0.5

        // Wrap around edges
        if (line.x < -50) line.x = canvas.width + 50
        if (line.x > canvas.width + 50) line.x = -50
        if (line.y < -50) line.y = canvas.height + 50
        if (line.y > canvas.height + 50) line.y = -50
      })

      ctx.globalAlpha = 1

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mounted, linesGradient, animationSpeed, interactive, bendRadius, bendStrength])

  if (!mounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  )
}
