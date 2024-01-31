import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div id='header-container'>
        <div id='header-name'>
          Kailash
        </div>
        <div>
          <ul className='Navbar'>
            <li>
              <button onClick={() => scrollToSection('home')}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')}>Projects</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')}>Skills</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
            </li>
            <li>
              <a href="https://drive.google.com/drive/folders/13WcfQSwX7onZpT90ZQ9yVQkrxfkjgUh5?usp=sharing" 
              target="_blank" rel="noopener noreferrer" id="resume-link">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

