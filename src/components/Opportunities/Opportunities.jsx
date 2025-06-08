import "./Opportunities.css"

import opportunity1 from "../../assets/opportunities-images/desktop/opportunity-1.png"
import opportunity2 from "../../assets/opportunities-images/desktop/opportunity-2.jpeg"
import opportunity3 from "../../assets/opportunities-images/desktop/opportunity-3.jpeg"
import opportunity4 from "../../assets/opportunities-images/desktop/opportunity-4.jpeg"


const Opportunities = () => {
  const opportunities = [
    {
      id: 1,
      image: opportunity1,
      alt: "Programa E-Subite - Motos y triciclos eléctricos a tu alcance",
      url: "#",
    },
    {
      id: 2,
      image: opportunity2,
      alt: "MiPymes Eficientes - Apoyo para mipymes eficientes",
      url: "#",
    },
    {
      id: 3,
      image: opportunity3,
      alt: "Certificados de Eficiencia Energética - Un reconocimiento económico a las medidas de eficiencia energética",
      url: "#",
    },
    {
      id: 4,
      image: opportunity4,
      alt: "Convocatoria LAEE 2025 - Línea de asistencia para eficiencia energética",
      url: "#",
    },
  ]

  return (
    <section className="opportunities section">
      <div className="container">
        <h2 className="section-title-xl">Oportunidades en eficiencia energética</h2>
        <p className="text-color-light">
          Programas y convocatorias disponibles para financiar tus proyectos de eficiencia energética
        </p>

        <div className="opportunities-grid">
          {opportunities.map((opportunity) => (
            <a
              key={opportunity.id}
              href={opportunity.url}
              className="opportunity-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={opportunity.image || "/placeholder.svg"} alt={opportunity.alt} className="opportunity-image" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Opportunities
