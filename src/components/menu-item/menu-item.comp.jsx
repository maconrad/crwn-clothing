import React from "react";
//Higher Order Component = HOC
// =Essentially a function that takes a component as an argument
// and returns a modified component
import { withRouter } from 'react-router-dom'; 

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
      <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} ></div>
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOW NOW</span>
        </div>
      </div>
  );
};

// Power up a component -> access to location, match, history
//  instead of tunneling these props all the way down from homepage
//  to directory to menu-item (bad design)
export default withRouter(MenuItem);
