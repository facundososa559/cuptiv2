import { useState } from "react"
import { motion } from "framer-motion"
import ProjectFilters from "./ProjectFilters/ProjectFilters"
import ProjectListCard from "./ProjectListCard"
import "./Projects.css"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("todos")

  const projects = [
    {
      id: "aerogeneradorDarrieus",
      title: "Aerogenerador Derioux",
      description: "Prototipo construido en 2013 en Facultad de Ingeniería UdelaR.",
      category: "energias-renovables",
      year: "2013",
    },
    {
      id: "copagran",
      title: "Copagran",
      description: "Auditoría energética realizada en planta de Young departamento de Río Negro.",
      category: "eficiencia-energetica",
      year: "2018",
    },
    {
      id: "ctc",
      title: "CTC",
      description: "Auditoría energética realizada en la planta de fabricación de productos cerámicos de empresa CTCM.",
      category: "eficiencia-energetica",
      year: "2019",
    },
    {
      id: "funsa",
      title: "FUNSA",
      description: "Auditoría energética en planta de fabricación de calerías de FUNSA.",
      category: "eficiencia-energetica",
      year: "2020",
    },
    {
      id: "esculturaLATU",
      title: "Escultura en Movimiento LATU",
      description: "Escultura cinética con movimiento rotativo entre sus módulos.",
      category: "diseno-industrial",
      year: "2017",
    },
    {
      id: "ucot",
      title: "UCOT",
      description: "Auditoria sobre el consumo de combustible y funcionamiento de la flota de unidades de transporte de la empresa UCOT.",
      category: "eficiencia-energetica",
      year: "2017",
    },
    {
      id: "coleme",
      title: "COLEME",
      description: "Auditoria energética en la planta de producción de leche pausterizada y fabricación de quesos.",
      category: "eficiencia-energetica",
      year: "2017",
    },
  ]

  const filteredProjects =
    activeFilter === "todos"
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="projects section" id="proyectos">
      <div className="container">
        <motion.h2
          className="section-title-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Proyectos destacados
        </motion.h2>

        <ProjectFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <ProjectListCard projects={filteredProjects} />
      </div>
    </section>
  )
}

export default Projects


