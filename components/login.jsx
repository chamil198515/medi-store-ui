import React from 'react';
import {
  Grid,
  Segment,
  Header,
  Icon,
  Form,
  Button,
  Message
} from 'semantic-ui-react';
import ProfilesLayout from './profilesLayout.jsx';
import SignUpModel from './signUpModel.jsx';

import styles from '../styles/main.css';

class Login extends React.Component {
  render() {
    return (<div className={styles.parent}>
      <Grid centered={true} columns={3} className={styles.child}>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Segment raised={true}>
              <Header as='h2' textAlign='center' color='teal'>
                <Header.Content>
                  Log-in to your account
                </Header.Content>
              </Header>
              <Form size='large'>
                <Form.Input fluid={true} icon='user' iconPosition='left' placeholder='User Name'/>
                <Form.Input fluid={true} icon='lock' iconPosition='left' placeholder='Password' type='password'/>
                <Button color='teal' fluid={true} size='large'>Login</Button>
              </Form>
            </Segment>
            <Message>
              New to us ?
              <a href='#' onClick={() => this._modal.openModal()}>
                Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        <SignUpModel ref={(modal) => { this._modal = modal; }}/>

    </div>);
  }
}
export default Login;
