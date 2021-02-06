import React, { Fragment } from 'react';

const Showcase = () => {
  return (
      <div className="showcase">
        <h2>Discover an Adventure</h2>
        <h1>Travel the World</h1>
        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>

        <div className="showcase__buttons">
          <button className="showcase__btn-services">SERVICES</button>
          <button className="showcase__btn-about">ABOUT ME</button>
        </div>
      </div>
  )
}

export default Showcase;