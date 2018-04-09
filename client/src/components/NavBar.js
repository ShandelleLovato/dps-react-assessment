import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
// import Directions from './Directions';
// import Home from './Home';

class NavBar extends Component {
  activeItem = (navPath) => {
    return navPath === this.props.location.pathname;
  }

  render() {
    return (
      <div>
        <Menu inverted>
          <Menu.Menu position='left'>
            <Link to='/'>
              <Menu.Item name='home'/>
            </Link>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Link to='/directions'>
              <Menu.Item name='DPS React Assessment'/>
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(NavBar);
