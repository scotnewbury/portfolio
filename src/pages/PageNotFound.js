import React from 'react';
import Navbar from '../components/Navbar';

const PageNotFound = () => (
  <div>
    <Navbar />
    <div className="main">
    <div className="showcase">
        <h2>Oops!</h2>
        <h1>404: Page Not Found</h1>
        <p>I can't seem to locate that page.</p>
      </div>
    </div>
  </div>
);

export default PageNotFound;