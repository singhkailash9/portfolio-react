import React from 'react';
import './Skills.css';
import skillsData from './SkillsData';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Skills = () => {
  return (
    <div className='skills-container'>
      <h1 id='skills-heading'>Skills</h1>
    <div className="skills" data-aos="flip-up">
      {skillsData.map((skill, index) => (
        <div key={index} className="skill">
          <img src={skill.icon} alt={skill.name} />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Skills;
