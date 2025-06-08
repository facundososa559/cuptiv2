import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const ProjectListCard = ({ projects }) => {
  const navigate = useNavigate()

  const handleClick = (category, id) => {
    navigate(`/servicios/${category}#${id}`)
  }

  return (
    <motion.div
      className="projects-grid"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          onClick={() => handleClick(project.category, project.id)}
          className="project-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ cursor: "pointer" }}
        >
          <h3 className="section-title-sm">{project.title}</h3>
          <p className="text-color-light">{project.description}</p>
          <div className="project-footer">
            <span className="link">Ver proyecto</span>
            <span className="project-year">{project.year}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProjectListCard

