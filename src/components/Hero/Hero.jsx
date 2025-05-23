"use client"

import { useState, useEffect } from "react"
import "./Hero.css"
import heroBg1 from "../../assets/hero-backrounds/hero-background-1.svg"
import heroBg2 from "../../assets/hero-backrounds/hero-background-2.svg"

const Hero = ({headline}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const headlines = [
    {
      title: "Reduce hasta un 40% tu factura energética",
      subtitle:
        "Soluciones especializadas en energías renovables y eficiencia energética para empresas que buscan optimizar costos y ser más sostenibles.",
      image: heroBg1,
      cta: "Calcular mi ahorro",
      ctaLink: "#calculadora",
    },
    {
      title: "Energía renovable para tu negocio",
      subtitle:
        "Instalación de paneles solares y sistemas de energía renovable con retorno de inversión en menos de 5 años.",
      image: heroBg2,
      cta: "Ver nuestros servicios",
      ctaLink: "#servicios",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % headlines.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [headlines.length])

  // Función para manejar el clic en los indicadores
  const handleIndicatorClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <section className="hero-alternativo">
      <div className="hero-background">
        {headlines.map((headline, index) => (
          <div
            key={index}
            className={`hero-bg-image ${index === activeIndex ? "active" : ""}`}
            style={{ zIndex: index === activeIndex ? 1 : 0 }}
          >
            <img src={headline.image || "/placeholder.svg"} alt={`Slide ${index + 1}`} className="bg-img" />
          </div>
        ))}
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            {headlines.map((headline, index) => (
              <div
                key={index}
                className={`hero-headline ${index === activeIndex ? "active" : ""}`}
                style={{
                  zIndex: index === activeIndex ? 2 : 0,
                  pointerEvents: index === activeIndex ? "auto" : "none",
                }}
              >
                <h1>{headline.title}</h1>
                <p className="hero-subtitle">{headline.subtitle}</p>
                <div className="hero-cta">
                  <a href={headline.ctaLink} className="btn btn-accent">
                    {headline.cta} <span className="arrow-icon">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <a href="#servicios" aria-label="Scroll to services">
          <span className="chevron-down"></span>
        </a>
      </div>
    </section>
  )
}

export default Hero
