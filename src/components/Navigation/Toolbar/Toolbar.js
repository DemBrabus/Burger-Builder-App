import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Hamburger from '../Hamburger/Hamburger';

const Toolbar = (props) => (
  <header className={ classes.Toolbar }>
     <Logo height={ '80%' }  />
   
    <div className={ classes.HideNavMobile }>
      <NavItems />
    </div>
     <div className={ classes.HideToggleDesktop } height={ '80%' }>
     <Hamburger open={ props.open } />
    </div>
    
  </header>
);

export default Toolbar;