import React from 'react';
import './index.scss';

const BackgroundImage = () => (
  <div className="BackgroundImage" style={{ backgroundImage: `url("${process.env.PUBLIC_URL}Images/LoginBackground.png")` }} />
);

export default BackgroundImage;
