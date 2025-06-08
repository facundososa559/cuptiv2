import { motion } from "framer-motion"
import "./ServicesCards.css"

const ServicesCards = () => {
  const services = [
    {
      id: "energias-renovables",
      title: "Energías renovables",
      iconClass: "icon-zap",
      description:
        "Nos dedicamos al desarrollo de proyectos e instalación de energía renovable para que ahorres en tu factura de luz.",
      link: "/servicios/energias-renovables",
    },
    {
      id: "eficiencia-energetica",
      title: "Eficiencia energética",
      iconClass: "icon-chart",
      description:
        "Realizamos proyectos de eficiencia energética orientados a reducir el consumo de energía y los costos de tu empresa o industria.",
      link: "/servicios/eficiencia-energetica",
    },
    {
      id: "diseno-industrial",
      title: "Diseño Industrial",
      iconClass: "icon-settings",
      description:
        "Soluciones de diseño mecánico y automatización industrial para optimizar procesos con alto grado de ingeniería en detalle.",
      link: "/servicios/diseno-industrial",
    },
  ]

  return (
    <section className="services section" id="servicios">
      <div className="container">
        <h2 className="section-title-xl">Nuestros servicios</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <div className="service-header">
                <div className="service-icon">
                  <span className={service.iconClass}></span>
                </div>
                <h3 className="section-title-sm">{service.title}</h3>
              </div>
              <p className="text-color-light">{service.description}</p>
              <a href={service.link} className="link">
                Más información
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesCards

