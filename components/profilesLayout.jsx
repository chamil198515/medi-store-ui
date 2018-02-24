import React from 'react';
import {
  Grid,
  Segment,
  Header,
  Icon,
  Divider,
  Form,
  Menu,
  Input,
  TextArea,
  Button
} from 'semantic-ui-react';
import PersonalProfile from './personalProfile.jsx';
import BusinessProfile from './businessProfile.jsx';
import styles from '../styles/main.css';

class ProfilesLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Personal'
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, {name}) {
    this.setState({activeItem: name});
  }

  render() {
    const {activeItem} = this.state
    var selectedProfile = null;
    if (this.state.activeItem === 'Personal') {
      selectedProfile = <PersonalProfile/>
    } else {
      selectedProfile = <BusinessProfile/>
    }
    return (<Grid container="container" centered={true}>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign='left'>
            <Header as='h2'>
              <Icon.Group size='large'>
                <Icon size='big' name='thin circle'/>
                <Icon name='user'/>
              </Icon.Group>
              {' '}
              My Profile
            </Header>
            <Divider/>
            <Menu tabular="tabular">
              <Menu.Item name='Personal' active={activeItem === 'Personal'} onClick={this.handleItemClick}/>
              <Menu.Item name='Business' active={activeItem === 'Business'} onClick={this.handleItemClick}/>
            </Menu>
            <Segment attached='bottom'>
              {selectedProfile}
            </Segment>
        </Grid.Column>
      </Grid.Row>

    </Grid>);
  }
}
export default ProfilesLayout;
