import React from 'react'
import { useState } from "react"
import "./Contact.css"

function ContactForm() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [formErrors, setFormErrors] = useState({})
  const [formStatus, setFormStatus] = useState(null)

  const validateForm = () => {
    const errors = {}

    if (!formData.name.trim()) {
      errors.name = "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      errors.email = "El email es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "El email no es válido"
    }

    if (!formData.service) {
      errors.service = "Por favor selecciona un servicio"
    }

    if (!formData.message.trim()) {
      errors.message = "El mensaje es requerido"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setFormStatus("sending")

      // Simulate form submission
      setTimeout(() => {
        console.log("Form submitted:", formData)
        setFormStatus("success")

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })

        // Reset form status after 3 seconds
        setTimeout(() => {
          setFormStatus(null)
        }, 3000)
      }, 1500)
    }
  }


  return (
    <div className="contact-form-container">
        {formStatus === "success" ? (
            <div className="form-success">
            <div className="success-icon"></div>
            <h3>¡Mensaje enviado!</h3>
            <p>Gracias por contactarnos. Te responderemos a la brevedad.</p>
            </div>
        ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
                <h3 className='section-title-lg'>Envíanos un mensaje</h3>
                <p>Completa el formulario y nos pondremos en contacto contigo lo antes posible</p>
            </div>

            <div className="form-row">
                <div className="form-group">
                <label className='' htmlFor="name">Nombre completo *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={formErrors.name ? "error" : ""}
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                </div>

                <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={formErrors.email ? "error" : ""}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="form-group">
                <label htmlFor="service">Servicio de interés *</label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={formErrors.service ? "error" : ""}
                >
                    <option value="">Selecciona una opción</option>
                    <option value="energias-renovables">Energías renovables</option>
                    <option value="eficiencia-energetica">Eficiencia energética</option>
                    <option value="ingenieria-industrial">Ingeniería industrial</option>
                    <option value="otro">Otro</option>
                </select>
                {formErrors.service && <span className="error-message">{formErrors.service}</span>}
                </div>
            </div>

            <button type="submit" className="btn btn-primary" disabled={formStatus === "sending"}>
                {formStatus === "sending" ? (
                <>
                    <span className="loading-spinner"></span>
                    Enviando...
                </>
                ) : (
                <>
                    Enviar mensaje <span className="send-icon"></span>
                </>
                )}
            </button>
            </form>
        )}
    </div>
  )
}

export default ContactForm
