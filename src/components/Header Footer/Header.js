import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (window.innerWidth <= 670) {
      if (sectionId === 'home' || sectionId === 'projects' || sectionId === 'skills') {
        return;
      } else {
        toggleNavbar();
      }
    }
  };

  function toggleNavbar() {
    if (window.innerWidth > 670){
      return;
    }
    const collapsibleNavbar = document.getElementById('collapsible-navbar');
    if (collapsibleNavbar.style.display === "block") {
      collapsibleNavbar.style.display = "none";
    } else {
      collapsibleNavbar.style.display = "block";
    }
  }

  return (
    <header>
      <div id='header-container'>
        <div id='header-name'>
          Kailash
        </div>
        <div id='navbar-container'>
          <div id='first-half'>
            <ul className='nav-list'>
              <li><button onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
            </ul>
            <button id="toggle-button" onClick={toggleNavbar}>
              <img id='nav-image' src='/icons/navbar.png' alt='navbar'></img>
            </button>
          </div>
          <ul className='nav-list' id='collapsible-navbar'>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            <li><a target="_blank" rel="noopener noreferrer" id="resume-link" onClick={toggleNavbar}
              href="https://www.canva.com/design/DAF7YGbdEAQ/u4Ia4yMxbjIK5CchjInDBQ/view?utm_content=DAF7YGbdEAQ&utm_campaign=designshare&utm_medium=link&utm_source=editor">
              Resume</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

