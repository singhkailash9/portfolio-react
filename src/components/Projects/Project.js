import React from 'react';
import './Project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Project = ({ project }) => {
  return (
    <div className="project" data-aos="fade-right">
      <img src={project.image} alt={project.title} />
      <div className="project-details">
        <h3 className='gradient-text'>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub Link
        </a>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
