"use client"

import "./Footer.css"
import logoBlue from "../../assets/cupti-logo.svg"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.3,
      ease: "easeOut"
    }
  })
}

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-logo"
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
          >
            <img src={logoBlue} alt="CUPTI" />
            <p>En CUPTI hacemos proyectos a la medida de tus necesidades.</p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <div className="social-icon facebook-icon"></div>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <div className="social-icon linkedin-icon"></div>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <div className="social-icon instagram-icon"></div>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="footer-links"
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
          >
            <h3 className="section-title-md">Navegación</h3>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="#servicios">Energías renovables</a></li>
              <li><a href="#proyectos">Eficiencia energética</a></li>
              <li><a href="#proyectos">Ingeniería Industrial</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-contact"
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
          >
            <h3 className="section-title-md">Contacto</h3>
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon location-icon"></div>
                <div className="info-content">
                  <h4 className="section-title-xs">Dirección</h4>
                  <p>Cooperativa Uruguaya de Producción Trabajo y Ingeniería</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon email-icon"></div>
                <div className="info-content">
                  <h4 className="section-title-xs">Email</h4>
                  <a href="mailto:info@cupti.com.uy">info@cupti.com.uy</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon phone-icon"></div>
                <div className="info-content">
                  <h4 className="section-title-xs">Teléfono</h4>
                  <a href="tel:+59891234567">+598 91 234 567</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={3}
        >
          <p>Todos los derechos reservados © {new Date().getFullYear()} CUPTI</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer



