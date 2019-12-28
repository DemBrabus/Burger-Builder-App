import React from 'react';
import classes from './Hamburger.module.css';

const Hamburger = (props) => (
  <div className={ classes.Hamburger} onClick={ props.open }>
    <div />
    <div />
    <div />
  </div>
);

export default Hamburger;