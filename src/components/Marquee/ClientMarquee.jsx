"use client"

import { useEffect, useRef } from "react"
import "./ClientMarquee.css"
import client1 from "../../assets/clients/client-1.svg"
import client2 from "../../assets/clients/client-2.svg"
import client3 from "../../assets/clients/client-3.svg"
import client4 from "../../assets/clients/client-4.svg"
import client5 from "../../assets/clients/client-5.svg"
import client6 from "../../assets/clients/client-6.svg"

const ClientMarquee = () => {
  const marqueeRef = useRef(null)

  const clients = [
    { id: 1, name: "Tres Cruces", logo: client1 },
    { id: 2, name: "Montevideo Shopping", logo: client2 },
    { id: 3, name: "FUNSA", logo: client3 },
    { id: 4, name: "UCOT", logo: client4 },
    { id: 5, name: "COPAGRAN", logo: client5 },
    { id: 6, name: "LATU", logo: client6 },
  ]

  useEffect(() => {
    if (!marqueeRef.current) return

    // Clonar los elementos para crear un efecto infinito
    const marqueeContent = marqueeRef.current
    const clientLogos = marqueeContent.querySelectorAll(".client-logo")

    // Clonar los logos para asegurar un desplazamiento continuo
    clientLogos.forEach((logo) => {
      const clone = logo.cloneNode(true)
      marqueeContent.appendChild(clone)
    })

    // Configurar la animación
    let animationFrame
    let startTime = null
    const speed = 0.2 // Velocidad ajustada

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      // Calcular la posición basada en el tiempo transcurrido
      const position = (elapsed * speed) % (clientLogos.length * 200)

      if (marqueeContent) {
        marqueeContent.style.transform = `translateX(-${position}px)`
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section className="client-marquee">
      <div>
        <div className="marquee-container">
          <div className="marquee-track" ref={marqueeRef}>
            {clients.map((client, index) => (
              <div key={`${client.id}-${index}`} className="client-logo">
                <img src={client.logo || "/placeholder.svg"} alt={client.name} width={140} height={70} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientMarquee