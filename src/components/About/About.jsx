import { motion } from "framer-motion"
import "./About.css"

const About = ({
  id = "nosotros",
  image,
  imageAlt = "Imagen representativa",
  imageLabel,
  title = "Título de sección",
  paragraphs = [],
}) => {
  return (
    <section className="about section" id={id}>
      <div className="container">
        <div className="about-content">
          {/* Imagen animada */}
          <motion.div
            className="about-image"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <img src={image} alt={imageAlt} className="about-img" />
            {imageLabel && (
              <div className="image-overlay">
                <span>{imageLabel}</span>
              </div>
            )}
          </motion.div>

          {/* Texto animado */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title-xl">{title}</h2>
            {paragraphs.map((text, idx) => (
              <p className="text-color-light" key={idx}>
                {text}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
