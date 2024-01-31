import React from 'react';
import Project from './Project';
import ProjectsData from './ProjectsData';
import './Project.css';

const Projects = () => {
  return (
    <div>
      <div className="projects-container">
      <h1>Projects</h1>
        {ProjectsData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
