import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    sideDrawer: false,
  }

  openSideDrawer = () => {
    this.setState({ sideDrawer: true })
  }
  closeSideDrawer = () => {
    this.setState({ sideDrawer: false })
  }
  render(){
    return (
      <Aux>
        <Toolbar 
          open={ this.openSideDrawer } />
        <SideDrawer 
          drawerStatus={ this.state.sideDrawer }
          close={ this.closeSideDrawer } />
        <main className={ classes.Main }>
          { this.props.children }
        </main>
      </Aux>
    );
  }
}

export default Layout;

