import React from 'react';
import './AboutPage.css'
import resume from '../assets/Scot-Newbury-resume.pdf';

const  AboutPage = () => (
  <div>
    <div className="main">
    <div className="aboutpage">
      <h1>About Me</h1>
        <div className="aboutscot">
            <img src="https://github.com/scotnewbury.png" />
            <div className="aboutinfo">
              <h2>Who am I?</h2>
              <h3>I'm Scot Newbury and I'm a Web Developer</h3>
              <p>As a Web Developer the goal is to solve problems and create solutions using the best tool for the job.
                I'm currently working with React and WordPress and am always looking for new projects and challenges to solve
                and grow my skill set.
              </p>
              <p>Interested in working together on a project? Take a look at my work samples and drop a line.</p>
            </div>
        </div>
        <div className="buttons">
          <a href={resume} className="btn btn-success" download="Scot-Newbury-Resume">Download My Resume</a>
          <a href="/projects" className="btn btn-success">View My Projects</a><br />
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;