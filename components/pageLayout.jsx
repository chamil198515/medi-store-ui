import React from 'react';
import Login from './login.jsx';
import ProfilesLayout from './profilesLayout.jsx';
import MainMenu from './mainMenu.jsx';
import { Grid } from 'semantic-ui-react'

class PageLayout extends React.Component {
   render() {
      return (
         <Grid container>
            <Grid.Column>
          <Login />
          </Grid.Column>
         </Grid>
      );
   }
}
export default PageLayout;
