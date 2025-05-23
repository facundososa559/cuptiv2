"use client"

import { useState, useEffect } from "react"
import "./FloatingCalculator.css"

const FloatingCalculator = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Limpieza del event listener cuando el componente se desmonta
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      href="#calculadora"
      className={`floating-calculator ${isVisible ? "visible" : ""}`}
      aria-label="Ir a la calculadora de ahorro"
    >
      <div className="floating-calculator-icon"></div>
      <span>Calcular ahorro</span>
    </a>
  )
}

export default FloatingCalculator
