import { motion } from "framer-motion"

import "./ProjectFilters.css"

const ProjectFilters = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: "todos", label: "Todos" },
    { id: "energias-renovables", label: "Energías renovables" },
    { id: "eficiencia-energetica", label: "Eficiencia energética" },
    { id: "ingenieria-industrial", label: "Ingeniería industrial" },
  ]

  return (
    <motion.div
      className="projects-filters"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="filter-icon"></div>
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
          onClick={() => setActiveFilter(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </motion.div>
  )
}

export default ProjectFilters
