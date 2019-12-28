import React from 'react';
import LogoImage from '../../assets/burger-logo.png'
import classes from './Logo.module.css';

const Logo = (props) => (
  <div className={ classes.Logo } style={ {height: props.height} }>
    <img src={ LogoImage } />
  </div>
);

export default Logo;