import { motion } from "framer-motion"
import "./About.css"
import engineer from "../../assets/about/quienes-somos-img.jpeg"

const About = () => {
  return (
    <section className="about section" id="nosotros">
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
            <img
              src={engineer}
              alt="Ingeniero de CUPTI realizando mediciones eléctricas"
              className="about-img"
            />
            <div className="image-overlay">
              <span>Desde 2013</span>
            </div>
          </motion.div>

          {/* Texto animado */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title-xl">Quienes somos</h2>
            <p className="text-color-light">
              Somos una empresa cooperativa especializada en soluciones energéticas eficientes y sostenibles.
            </p>
            <p className="text-color-light">
              CUPTI Ingeniería fue fundada en el año 2013 por seis socios, en aquel entonces estudiantes de ingeniería,
              con el objetivo de convertirse en la referencia en el sector de la ingeniería y la eficiencia energética.
            </p>
            <p className="text-color-light">
              Desde nuestra fundación, hemos incorporado nuevos socios y áreas de especialización para ofrecer
              soluciones integrales que ayudan a nuestros clientes a optimizar sus recursos energéticos y mejorar sus
              procesos industriales.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
