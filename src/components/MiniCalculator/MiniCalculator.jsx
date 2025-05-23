"use client"

import { useState } from "react"
import "./MiniCalculator.css"

const MiniCalculator = () => {
  const [formData, setFormData] = useState({
    consumo: "",
    potencia: "",
  })

  const [resultado, setResultado] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Limpiar error cuando el usuario escribe
    if (error) {
      setError("")
    }
  }

  const validateForm = () => {
    if (!formData.consumo || isNaN(formData.consumo) || formData.consumo <= 0) {
      setError("Por favor ingrese un valor de consumo válido")
      return false
    }

    if (!formData.potencia || isNaN(formData.potencia) || formData.potencia < 3.5 || formData.potencia > 40) {
      setError("Por favor ingrese un valor de potencia entre 3.5 kW y 40 kW")
      return false
    }

    return true
  }

  const calcularAhorro = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    // Simulamos un cálculo y una pequeña demora para mostrar el loading
    setTimeout(() => {
      const consumo = Number.parseFloat(formData.consumo)
      const potencia = Number.parseFloat(formData.potencia)

      // Tarifas actuales (General Simple)
      const tarifaActual1 = 5.344
      const tarifaActual2 = 6.132
      const cargoPotenciaActual = 60.5
      const cargoFijoActual = 235.9

      // Tarifas futuras (General Hora-Estacional)
      const tarifaPunta = 4.411
      const tarifaValle = 2.006
      const tarifaLlano = 4.411
      const cargoPotenciaFuturo = 125.0
      const cargoFijoFuturo = 350.0

      // Calcular costo actual
      let costoActual
      if (consumo <= 1000) {
        costoActual = consumo * tarifaActual1
      } else {
        costoActual = 1000 * tarifaActual1 + (consumo - 1000) * tarifaActual2
      }
      costoActual += cargoPotenciaActual * potencia + cargoFijoActual

      // Calcular costo futuro
      const consumoPunta = (consumo * 4) / 24
      const consumoValle = (consumo * 7) / 24
      const consumoLlano = (consumo * 13) / 24

      const costoFuturo = consumoPunta * tarifaPunta + consumoValle * tarifaValle + consumoLlano * tarifaLlano
      const costoFuturoTotal = costoFuturo + cargoPotenciaFuturo * potencia + cargoFijoFuturo

      const ahorro = costoActual - costoFuturoTotal

      setResultado({
        ahorro: Math.max(ahorro, 0), // Evitamos mostrar ahorros negativos
        ahorroNegativo: ahorro < 0,
        ahorroAnual: Math.max(ahorro, 0) * 12,
        costoActual,
        costoFuturo: costoFuturoTotal,
      })

      setLoading(false)
    }, 1000)
  }

  const resetCalculator = () => {
    setFormData({
      consumo: "",
      potencia: "",
    })
    setResultado(null)
    setError("")
  }

  return (
    <section className="mini-calculator-section" id="calculadora">
      <div className="mini-calculator-container">
        {!resultado ? (
          <>
            <form onSubmit={calcularAhorro} className="calculator-form">
              <div className="mini-calculator-header">
                <h3 className="section-title-lg">Calcula cuánto puedes ahorrar con nosotros</h3>
              </div>
              <div className="form-group">
                <label htmlFor="consumo">¿Cuál es tu consumo mensual? (kWh)</label>
                <input
                  type="number"
                  id="consumo"
                  name="consumo"
                  value={formData.consumo}
                  onChange={handleInputChange}
                  placeholder="Ej: 500"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="potencia">¿Cuál es tu potencia contratada? (kW)</label>
                <input
                  type="number"
                  id="potencia"
                  name="potencia"
                  value={formData.potencia}
                  onChange={handleInputChange}
                  placeholder="Ej: 5.5"
                  step="0.1"
                  required
                />
              </div>

              {error && <div className="error-message">{error}</div>}

              <button type="submit" className="btn-calculate" disabled={loading}>
                {loading ? "Calculando..." : "Calcular ahorro"}
              </button>
            </form>

            <div className="calculator-note">
              <p>
                * Cálculo estimado basado en tarifas actuales. Para un análisis detallado, utiliza nuestra calculadora
                avanzada o ponte en contacto con nosotros →
              </p>
            </div>
          </>
        ) : (
          <div className="calculator-results">
            {resultado.ahorroNegativo ? (
              <div className="negative-savings-alert">
                <p>El cambio a la tarifa general hora estacional no generaría ahorro en tu caso específico.</p>
                <p>Te recomendamos contactar con nuestros especialistas para un análisis personalizado.</p>
              </div>
            ) : (
              <>
                <div className="savings-result">
                  <h3>Tu ahorro estimado:</h3>
                  <div className="savings-amount">
                    <div className="monthly-savings">
                      <span className="amount">${resultado.ahorro.toFixed(2)}</span>
                      <span className="period">mensual</span>
                    </div>
                    <div className="yearly-savings">
                      <span className="amount">${resultado.ahorroAnual.toFixed(2)}</span>
                      <span className="period">anual</span>
                    </div>
                  </div>
                </div>

                <div className="savings-details">
                  <div className="detail-item">
                    <span className="detail-label">Costo actual:</span>
                    <span className="detail-value">${resultado.costoActual.toFixed(2)}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Costo con nueva tarifa:</span>
                    <span className="detail-value">${resultado.costoFuturo.toFixed(2)}</span>
                  </div>
                </div>
              </>
            )}

            <div className="calculator-actions">
              <button onClick={resetCalculator} className="btn-recalculate">
                Calcular de nuevo
              </button>
              <a href="/calculadora" className="btn-advanced">
                Calculadora avanzada
              </a>
            </div>

            <div className="contact-prompt">
              <p>
                ¿Quieres un análisis más detallado? <a href="/contacto">Contáctanos</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default MiniCalculator
