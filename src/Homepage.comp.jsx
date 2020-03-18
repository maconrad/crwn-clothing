import React from "react";

import './homepage.styles.scss'

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Hat</h1>
            <span className="subtitle">SHOW NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Jackets</h1>
            <span className="subtitle">SHOW NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Wemon</h1>
            <span className="subtitle">SHOW NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Men</h1>
            <span className="subtitle">SHOW NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Lulu</h1>
            <span className="subtitle">SHOW NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
