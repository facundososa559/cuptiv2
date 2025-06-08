"use client"

import ContactForm from "./ContactForm"
import "./Contact.css"
import MiniCalculator from "../MiniCalculator/MiniCalculator"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" })

  return (
    <section className="contact-form-section section" id="contacto" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Contáctanos
        </motion.h2>

        <motion.div
          className="contact-container"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <ContactForm />
          <MiniCalculator />
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

