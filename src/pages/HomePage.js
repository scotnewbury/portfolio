import React from 'react';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';

const HomePage = () => (
  <div>
    <div className="main">
      <div className="showcase">
        <h2>Let's build something together.</h2>
        <h1>Scot Newbury</h1>
        <p>Front End and Wordpres Developer</p>
        <div className="skillicons">
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-js"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-wordpress"></i>
        </div>
        {/* <div className="showcase__buttons">
          <button className="showcase__btn-services">PROJECTS</button>
          <button className="showcase__btn-about">ABOUT ME</button>
        </div> */}
      </div>
    </div>
  </div>
);

export default HomePage;