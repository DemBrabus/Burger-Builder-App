import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const Layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={ classes.Main }>
      { props.children }
    </main>
  </Aux>
);

export default Layout;