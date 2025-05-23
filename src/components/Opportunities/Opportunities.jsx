import "./Opportunities.css"

const Opportunities = () => {
  const opportunities = [
    {
      id: 1,
      image: "/assets/opportunity-1.jpg",
      alt: "Programa E-Subite - Motos y triciclos eléctricos a tu alcance",
      url: "#",
    },
    {
      id: 2,
      image: "/assets/opportunity-2.png",
      alt: "MiPymes Eficientes - Apoyo para mipymes eficientes",
      url: "#",
    },
    {
      id: 3,
      image: "/assets/opportunity-3.jpg",
      alt: "Certificados de Eficiencia Energética - Un reconocimiento económico a las medidas de eficiencia energética",
      url: "#",
    },
    {
      id: 4,
      image: "/assets/opportunity-4.jpg",
      alt: "Convocatoria LAEE 2025 - Línea de asistencia para eficiencia energética",
      url: "#",
    },
  ]

  return (
    <section className="opportunities section">
      <div className="container">
        <h2 className="section-title">Oportunidades en eficiencia energética</h2>
        <p className="section-subtitle">
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
