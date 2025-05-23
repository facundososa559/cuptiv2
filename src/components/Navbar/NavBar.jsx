"use client"

import { useState, useEffect } from "react"
import "./NavBar.css"
import logoBlue from "../../assets/cupti-logo-blue.svg"
import logoWhite from "../../assets/cupti-logo.svg"

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <a href="/" className="navbar-logo">
          <img src={isScrolled ? logoBlue : logoWhite} alt="CUPTI" />
        </a>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="navbar-links">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li className="dropdown">
              <button className="dropdown-toggle" onClick={toggleServices} aria-expanded={isServicesOpen}>
                Servicios <span className="arrow"></span>
              </button>
              <ul className={`dropdown-menu ${isServicesOpen ? "show" : ""}`}>
                <li>
                  <a href="/servicios/energias-renovables">Energías renovables</a>
                </li>
                <li>
                  <a href="/servicios/eficiencia-energetica">Eficiencia energética</a>
                </li>
                <li>
                  <a href="/servicios/diseno-industrial">Ingeniería Industrial</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/calculadora">Calculadora</a>
            </li>
            <li>
              <a href="/nosotros">Nosotros</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
