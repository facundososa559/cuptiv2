import { motion } from "framer-motion"

const ProjectList = ({ projects }) => {
  return (
    <motion.div
      className="projects-grid"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {projects.map((project, index) => (
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
          <p className="text-color-light">{project.description}</p>
          <div className="project-footer">
            <span className="link">Ver proyecto</span>
            <span className="project-year">{project.year}</span>
          </div>
        </motion.a>
      ))}
    </motion.div>
  )
}

export default ProjectList
