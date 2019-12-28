import React from 'react';
import classes from './NavItems.module.css';

const active = true;

const NavItems = (props) => (
  <ul className={ classes.NavItemsList }>
    <li className={ classes.NavItemsItem }>
      <a href="/" className={ active ? classes.active : null }>Burger Builder</a>
    </li>
    <li className={ classes.NavItemsItem }>
      <a href="/">Orders</a>
    </li>
    <li className={ classes.NavItemsItem }>
      <a href="/">Checkout</a>
    </li>
  </ul>
);

export default NavItems;