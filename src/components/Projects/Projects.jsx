"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import "./Projects.css"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("todos")

  const projects = [
    {
      id: 1,
      title: "Aerogenerador Derioux",
      description: "Prototipo construido en 2013 en Facultad de Ingeniería UdelaR.",
      category: "energias-renovables",
      year: "2013",
    },
    {
      id: 2,
      title: "Copagran",
      description: "Auditoría energética realizada en planta de Young departamento de Río Negro.",
      category: "eficiencia-energetica",
      year: "2018",
    },
    {
      id: 3,
      title: "CTC",
      description: "Auditoría energética realizada en la planta de fabricación de productos cerámicos de empresa CTCM.",
      category: "eficiencia-energetica",
      year: "2019",
    },
    {
      id: 4,
      title: "FUNSA",
      description: "Auditoría energética en planta de fabricación de calerías de FUNSA.",
      category: "eficiencia-energetica",
      year: "2020",
    },
    {
      id: 5,
      title: "Escultura en Movimiento LATU",
      description: "Escultura cinética con movimiento rotativo entre sus módulos.",
      category: "ingenieria-industrial",
      year: "2017",
    },
  ]

  const filteredProjects =
    activeFilter === "todos" ? projects : projects.filter((project) => project.category === activeFilter)

  const getCategoryName = (category) => {
    switch (category) {
      case "energias-renovables":
        return "Energías Renovables"
      case "eficiencia-energetica":
        return "Eficiencia Energética"
      case "ingenieria-industrial":
        return "Ingeniería Industrial"
      default:
        return category
    }
  }

  return (
    <section className="projects section" id="proyectos">
      <div className="container">
        {/* TÍTULO animado */}
        <motion.h2
          className="section-title-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Proyectos destacados
        </motion.h2>

        {/* BOTONES animados */}
        <motion.div
          className="projects-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="filter-icon"></div>
          <button
            className={`filter-btn ${activeFilter === "todos" ? "active" : ""}`}
            onClick={() => setActiveFilter("todos")}
          >
            Todos
          </button>
          <button
            className={`filter-btn ${activeFilter === "energias-renovables" ? "active" : ""}`}
            onClick={() => setActiveFilter("energias-renovables")}
          >
            Energías renovables
          </button>
          <button
            className={`filter-btn ${activeFilter === "eficiencia-energetica" ? "active" : ""}`}
            onClick={() => setActiveFilter("eficiencia-energetica")}
          >
            Eficiencia energética
          </button>
          <button
            className={`filter-btn ${activeFilter === "ingenieria-industrial" ? "active" : ""}`}
            onClick={() => setActiveFilter("ingenieria-industrial")}
          >
            Ingeniería industrial
          </button>
        </motion.div>

        {/* GRILLA animada (fade in contenedor) */}
        <motion.div
          className="projects-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={`/proyectos/${project.id}`}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="section-title-sm">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <span className="project-year">{project.year}</span>
                <span className="project-link">Ver proyecto</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

