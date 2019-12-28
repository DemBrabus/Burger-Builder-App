import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const SideDrawer = (props) => {

    let statusClasses = [ classes.SideDrawer, classes.Close ];
    if( props.drawerStatus ){
      statusClasses = [ classes.SideDrawer, classes.Open ]
    }

  return (
    <Aux>
      <div className={ statusClasses.join(' ') }>
        <Logo height={ '80px' } />
        <nav>
          <NavItems />
        </nav>
      </div>
      <Backdrop 
        show={ props.drawerStatus }
        clicked={ props.close } />
    </Aux>
    
  )
};

export default SideDrawer;