import React from 'react';
import {Menu, Segment} from 'semantic-ui-react';
import ProfilesLayout from './profilesLayout.jsx';
import styles from '../styles/main.css';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 'profile'
    }
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  handleMenuItemClick(e, {id}) {
    this.setState({activeMenuItem: id});
  }

  render() {
    const { activeMenuItem } = this.state;
    var selectedMenuItem = null;
    if (this.state.activeMenuItem === 'myprofile') {
      selectedMenuItem = <ProfilesLayout/>
    }
    return (<div>
      <Menu pointing="pointing" secondary="secondary">
        <Menu.Item name='My Profile' id='myprofile' active={activeMenuItem === 'myprofile'} onClick={this.handleMenuItemClick}/>
        <Menu.Item name='My Medicine' id='mymedicine' active={activeMenuItem === 'mymedicine'} onClick={this.handleMenuItemClick}/>
        <Menu.Item name='My Orders' id='myorders' active={activeMenuItem === 'myorders'} onClick={this.handleMenuItemClick}/>
        <Menu.Menu position='right'>
          <Menu.Item name='logout' id='logout' active={activeMenuItem === 'logout'} onClick={this.handleMenuItemClick}/>
        </Menu.Menu>
      </Menu>

      <Segment>
        { selectedMenuItem }
      </Segment>
    </div>);
  }
}
export default MainMenu;
