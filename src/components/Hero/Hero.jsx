"use client"

import { useState, useEffect } from "react"
import "./Hero.css"

const Hero = ({ items = [], autoSlide = true, interval = 6000 }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!autoSlide || items.length <= 1) return

    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, interval)

    return () => clearInterval(timer)
  }, [items.length, autoSlide, interval])

  const handleIndicatorClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <section className="hero-alternativo">
      <div className="hero-background">
        {items.map((item, index) => (
          <div
            key={index}
            className={`hero-bg-image ${index === activeIndex ? "active" : ""}`}
            style={{ zIndex: index === activeIndex ? 1 : 0 }}
          >
            <img src={item.image || "/placeholder.svg"} alt={`Slide ${index + 1}`} className="bg-img" />
          </div>
        ))}
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            {items.map((item, index) => (
              <div
                key={index}
                className={`hero-headline ${index === activeIndex ? "active" : ""}`}
                style={{
                  zIndex: index === activeIndex ? 2 : 0,
                  pointerEvents: index === activeIndex ? "auto" : "none",
                }}
              >
                <h1>{item.title}</h1>
                <p className="hero-subtitle">{item.subtitle}</p>
                {item.cta && (
                  <div className="hero-cta">
                    <a href={item.ctaLink} className="btn btn-accent">
                      {item.cta} <span className="arrow-icon">→</span>
                    </a>
                  </div>
                )}
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
