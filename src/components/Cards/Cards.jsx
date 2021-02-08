import React, { Component } from 'react';
import Card from './CardUI';
import img1 from '../../assets/images/stmarkslodge-website-screen-capture.png';
import img2 from '../../assets/images/background-image.jpg';
import img3 from '../../assets/images/background-image.jpg';
import './card-style.css';

class Cards extends Component {

  render() {
    return (
      <div className="card-container">
        <Card imgsrc={img1} title="St. Mark's Lodge Website" 
          cardtext="Created a custom WordPress theme including a hero image." 
          siteurl="https://stmarkslodge.org"
          githubrepo="https://github.com/scotnewbury/st-marks-website-theme" />
        <Card imgsrc={img2} />
        <Card imgsrc={img3} />
      </div>
    );
  }

}

export default Cards;