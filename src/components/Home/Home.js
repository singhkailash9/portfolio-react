import React from 'react';
import Icons from './Icons';
import './Home.css'

const Home = () => {
  return (
    <div id="home-container">
      <div className="text-container">
        <h2>Hello! I'm</h2>
        <h1 className='gradient-text' id='home-name'> Kailash Singh</h1>
        <Icons />
        <p className='first-item'>A passionate </p>
        <div className='highlight second-item' style={{ "padding": "0.1rem" }}>
          <span>Full-stack web developer</span>
        </div>
      </div>
      <div className="image-container">
        <img src='/home.png' alt="Portfolio" />
      </div>
    </div>
  );
};

export default Home;