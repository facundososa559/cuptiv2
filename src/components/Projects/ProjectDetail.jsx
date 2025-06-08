import React from 'react'
import "./Projects.css"

const ProjectDetail = ({ id, image, title, bullets }) => {
  return (
      <div className="container project-detail-container" id={id}>
        <img className='project-image' src={image} alt={`Vista previa de ${title}`} />
        <div className="text">
          <h3 className='section-title-lg'>{title}</h3>
          <ul>
            {bullets.map((item, i) => (
              <li key={i} className='text-color-light'>{item}</li>
            ))}
          </ul>
        </div>
      </div>
  )
}

export default ProjectDetail
