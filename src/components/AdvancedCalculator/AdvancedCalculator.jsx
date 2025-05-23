"use client"

import { useState, useRef, useEffect } from "react"
import "./AdvancedCalculator.css"
import facturaImage from "../../assets/images/factura_UTE.png"

const AdvancedCalculator = () => {
  const [formData, setFormData] = useState({
    tarifa: "general",
    mes: "1",
    potencia: "",
    consumo: "",
  })

  const [errors, setErrors] = useState({
    potencia: "",
    consumo: "",
  })

  const [showResult, setShowResult] = useState(false)
  const [showNegativeAlert, setShowNegativeAlert] = useState(false)
  const [resultData, setResultData] = useState(null)

  const facturaImgRef = useRef(null)
  const facturaContainerRef = useRef(null)
  const zoomViewRef = useRef(null)

  // Efecto para el zoom
  useEffect(() => {
    const facturaImg = facturaImgRef.current
    const facturaContainer = facturaContainerRef.current
    const zoomView = zoomViewRef.current

    if (!facturaImg || !facturaContainer || !zoomView) return

    const handleMouseMove = (e) => {
      if (e.target !== facturaImg) {
        zoomView.style.display = "none"
        return
      }

      const containerRect = facturaContainer.getBoundingClientRect()
      const x = e.clientX - containerRect.left
      const y = e.clientY - containerRect.top

      const imgRect = facturaImg.getBoundingClientRect()
      const imgLeft = imgRect.left - containerRect.left
      const imgTop = imgRect.top - containerRect.top
      const imgWidth = imgRect.width
      const imgHeight = imgRect.height

      const relX = (x - imgLeft) / imgWidth
      const relY = (y - imgTop) / imgHeight

      zoomView.style.display = "block"
      zoomView.style.width = "200px"
      zoomView.style.height = "200px"
      zoomView.style.left = `${e.clientX + 20}px`
      zoomView.style.top = `${e.clientY + 20}px`

      if (!zoomView.querySelector("img")) {
        const zoomImg = document.createElement("img")
        zoomImg.src = facturaImg.src
        zoomView.appendChild(zoomImg)
      }

      const zoomImg = zoomView.querySelector("img")
      zoomImg.style.width = `${imgWidth * 2}px`
      zoomImg.style.height = `${imgHeight * 2}px`

      const viewWidth = 200
      const viewHeight = 200
      const imgPosX = -relX * (imgWidth * 2) + viewWidth / 2
      const imgPosY = -relY * (imgHeight * 2) + viewHeight / 2

      zoomImg.style.left = `${imgPosX}px`
      zoomImg.style.top = `${imgPosY}px`
    }

    const handleMouseLeave = () => {
      zoomView.style.display = "none"
    }

    facturaContainer.addEventListener("mousemove", handleMouseMove)
    facturaContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      facturaContainer.removeEventListener("mousemove", handleMouseMove)
      facturaContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    let isValid = true

    if (!formData.potencia || isNaN(formData.potencia)) {
      newErrors.potencia = "Por favor ingrese un valor de potencia válido"
      isValid = false
    } else if (formData.potencia < 3.5 || formData.potencia > 40) {
      newErrors.potencia = "Esta tarifa no admite potencias contratadas inferiores a 3.5 kW o superiores a 40 kW."
      isValid = false
    }

    if (!formData.consumo || isNaN(formData.consumo)) {
      newErrors.consumo = "Por favor ingrese un valor de consumo válido"
      isValid = false
    } else if (formData.consumo < 0) {
      newErrors.consumo = "El consumo de energía no puede ser un valor negativo."
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const calculateSavings = () => {
    if (!validateForm()) return

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

    // Verificar si el ahorro es negativo
    if (ahorro < 0) {
      setShowNegativeAlert(true)
      return
    }

    setShowNegativeAlert(false)
    setResultData({
      ahorro,
      costoActual,
      costoFuturo: costoFuturoTotal,
      consumoPunta,
      consumoValle,
      consumoLlano,
      tarifaActual1,
      tarifaActual2,
      cargoPotenciaActual,
      cargoFijoActual,
      tarifaPunta,
      tarifaValle,
      tarifaLlano,
      cargoPotenciaFuturo,
      cargoFijoFuturo,
      potencia,
      consumo,
    })
    setShowResult(true)
  }

  const resetCalculator = () => {
    setShowResult(false)
    setShowNegativeAlert(false)
    setResultData(null)
  }

  const handleContact = () => {
    alert("Gracias por contactarnos. Nos pondremos en contacto contigo pronto.")
  }

  return (
    <div className="advanced-calculator">
      <h2>Calculadora Pymes</h2>
      <h3>
        La misma se basa en el cambio de tu Tarifa Actual a la Tarifa General Hora Estacional, con la cual podrás
        optimizar el costo de energía en tu factura, <strong>¡probala y ahorrá!</strong>
      </h3>

      {!showResult ? (
        <div className="main-container" id="inputSection">
          <div className="factura-container">
            <div className="factura-img-container" ref={facturaContainerRef}>
              <img
                src={facturaImage || "/placeholder.svg"}
                alt="Ejemplo de factura eléctrica con datos destacados"
                className="factura-ejemplo"
                ref={facturaImgRef}
              />
            </div>
          </div>

          <div className="input-fields">
            <div className="column">
              <div className="input-group">
                <label htmlFor="tarifa">
                  <span className="input-number-ref">1</span> Seleccioná el tipo de tarifa:
                </label>
                <select id="tarifa" name="tarifa" value={formData.tarifa} onChange={handleInputChange}>
                  <option value="general">Tarifa General Simple</option>
                  <option value="hora-estacional">Tarifa General Hora-Estacional</option>
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="mes">
                  <span className="input-number-ref">2</span> Seleccioná el período de consumo (mes):
                </label>
                <select id="mes" name="mes" value={formData.mes} onChange={handleInputChange}>
                  <option value="1">Enero</option>
                  <option value="2">Febrero</option>
                  <option value="3">Marzo</option>
                  <option value="4">Abril</option>
                  <option value="5">Mayo</option>
                  <option value="6">Junio</option>
                  <option value="7">Julio</option>
                  <option value="8">Agosto</option>
                  <option value="9">Septiembre</option>
                  <option value="10">Octubre</option>
                  <option value="11">Noviembre</option>
                  <option value="12">Diciembre</option>
                </select>
              </div>
            </div>

            <div className="column">
              <div className="input-group">
                <label htmlFor="potencia">
                  <span className="input-number-ref">3</span> Potencia Contratada (kW):
                </label>
                <input
                  type="number"
                  id="potencia"
                  name="potencia"
                  placeholder="Ingresá tu Potencia Contratada en kW"
                  value={formData.potencia}
                  onChange={handleInputChange}
                  className={errors.potencia ? "input-error" : ""}
                />
                {errors.potencia && <div className="error-message visible">{errors.potencia}</div>}
              </div>

              <div className="input-group">
                <label htmlFor="consumo">
                  <span className="input-number-ref">4</span> Consumo de Energía (kWh):
                </label>
                <input
                  type="number"
                  id="consumo"
                  name="consumo"
                  placeholder="Ingresá tu consumo de energía en kWh"
                  value={formData.consumo}
                  onChange={handleInputChange}
                  className={errors.consumo ? "input-error" : ""}
                />
                {errors.consumo && <div className="error-message visible">{errors.consumo}</div>}
              </div>

              <button id="calcularBtn" onClick={calculateSavings}>
                Calcular Ahorro
              </button>

              {showNegativeAlert && (
                <div className="alerta-ahorro-negativo show">
                  El cambio a la tarifa general hora estacional le generará un costo mayor. No se recomienda el cambio.
                </div>
              )}
            </div>

            <div className="nota-legal">
              * Los resultados obtenidos son aproximados, y son calculados en base a los datos proporcionados. Para un
              análisis más completo del consumo de energía de tu Pyme, contactanos.
            </div>
          </div>
        </div>
      ) : (
        <div className="result">
          <div className="ahorro-mensual">
            <h3>Ahorro mensual estimado:</h3>
            <div className="ahorro-valor">
              <span className="positive">$U {resultData.ahorro.toFixed(2)}</span>
            </div>
            <p style={{ fontSize: "17px", color: "#666", marginTop: "8px" }}>
              Con el cambio de tu Tarifa Actual a la Tarifa Hora Estacional
            </p>
          </div>

          <div className="resumen">Resumen</div>

          <div className="detalles-tarifas">
            <div className="column">
              <h3>Tarifa Actual: General Simple</h3>
              <div className="item">
                <strong>Costo Total de Energía</strong>
                <span>
                  $U{" "}
                  {(resultData.consumo <= 1000
                    ? resultData.consumo * resultData.tarifaActual1
                    : 1000 * resultData.tarifaActual1 + (resultData.consumo - 1000) * resultData.tarifaActual2
                  ).toFixed(2)}
                </span>
              </div>
              <div className="item">
                <strong>Cargo por Potencia Contratada</strong>
                <span>$U {(resultData.cargoPotenciaActual * resultData.potencia).toFixed(2)}</span>
              </div>
              <div className="item">
                <strong>Cargo Fijo</strong>
                <span>$U {resultData.cargoFijoActual.toFixed(2)}</span>
              </div>
              <div className="item">
                <strong>Total Actual</strong>
                <span>$U {resultData.costoActual.toFixed(2)}</span>
              </div>
            </div>

            <div className="column">
              <h3>Tarifa Futura: General Hora Estacional</h3>
              <div className="item">
                <strong>Costo Total de Energía</strong>
                <span>
                  $U{" "}
                  {(
                    resultData.consumoPunta * resultData.tarifaPunta +
                    resultData.consumoValle * resultData.tarifaValle +
                    resultData.consumoLlano * resultData.tarifaLlano
                  ).toFixed(2)}
                </span>
              </div>
              <div className="item">
                <strong>Cargo por Potencia Contratada</strong>
                <span>$U {(resultData.cargoPotenciaFuturo * resultData.potencia).toFixed(2)}</span>
              </div>
              <div className="item">
                <strong>Cargo Fijo</strong>
                <span>$U {resultData.cargoFijoFuturo.toFixed(2)}</span>
              </div>
              <div className="item">
                <strong>Total Futuro</strong>
                <span>$U {resultData.costoFuturo.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="contacto">
            Si querés un análisis más completo del consumo en tu factura y los ahorros que podés conseguir, no dudes en
            ponerte en contacto con nosotros. <strong>¡Te asesoramos!</strong>
          </div>

          <div className="botones-finales">
            <button className="volver-calcular" onClick={resetCalculator}>
              Volver a calcular
            </button>
            <button className="contactarse" onClick={handleContact}>
              Contactarse
            </button>
          </div>
        </div>
      )}

      <div className="zoom-view" ref={zoomViewRef}></div>
    </div>
  )
}

export default AdvancedCalculator
