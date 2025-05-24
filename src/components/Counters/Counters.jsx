"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import "./Counters.css"

const Counters = () => {
  const countersRef = useRef(null)
  const counterRefs = useRef([])

  const counters = [
    {
      id: 1,
      value: 10,
      suffix: "+",
      label: "Años de experiencia",
      iconClass: "icon-trending-up",
    },
    {
      id: 2,
      value: 100,
      suffix: "+",
      label: "Proyectos terminados",
      iconClass: "icon-bar-chart",
    },
    {
      id: 3,
      value: 135000,
      suffix: "+",
      label: "kWh ahorrados en todo el país",
      iconClass: "counter-icon-zap",
    },
  ]

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const animateCounter = (counter, targetValue) => {
      const duration = 1000
      const frameDuration = 1000 / 60
      const totalFrames = Math.round(duration / frameDuration)
      let frame = 0

      const easeOutQuad = (t) => t * (2 - t)

      const animate = () => {
        frame++
        const progress = easeOutQuad(frame / totalFrames)
        const currentValue = Math.floor(progress * targetValue)

        if (counter) {
          if (targetValue >= 1000) {
            counter.textContent = currentValue.toLocaleString() + (counter.dataset.suffix || "")
          } else {
            counter.textContent = currentValue + (counter.dataset.suffix || "")
          }
        }

        if (frame < totalFrames) {
          requestAnimationFrame(animate)
        }
      }

      animate()
    }

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          counterRefs.current.forEach((counter) => {
            if (counter) {
              const targetValue = Number.parseInt(counter.dataset.value || "0", 10)
              animateCounter(counter, targetValue)
            }
          })

          if (countersRef.current) {
            observer.unobserve(countersRef.current)
          }
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, options)

    if (countersRef.current) {
      observer.observe(countersRef.current)
    }

    return () => {
      if (countersRef.current) {
        observer.unobserve(countersRef.current)
      }
    }
  }, [])

  return (
    <section className="counters-section section">
      <div className="container">
        <div className="counters" ref={countersRef}>
          {counters.map((counter, index) => (
            <motion.div
              key={counter.id}
              className="counter-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="counter-header">
                <span className={counter.iconClass}></span>
              </div>
              <div
                className="counter-value"
                ref={(el) => (counterRefs.current[index] = el)}
                data-suffix={counter.suffix}
                data-value={counter.value}
              >
                0
              </div>
              <div className="counter-label">{counter.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counters
