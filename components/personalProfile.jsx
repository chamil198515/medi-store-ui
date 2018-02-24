import React from 'react';
import { Form,TextArea,Button,Input } from 'semantic-ui-react'

class PersonalProfile extends React.Component {
   render() {
      return (
        <Form>
          <Form.Field control={Input} label='First Name' placeholder='First Name' width={8}/>
          <Form.Field control={Input} label='Last Name' placeholder='Last Name' width={8}/>
          <Form.Field control={Input} label='Login Name' placeholder='Login Name' width={8}/>
          <Form.Field width={8}>
            <label>Password</label>
            <Input type='password' placeholder='Password'/>
          </Form.Field>
          <Form.Field control={Input} label='Email' placeholder='joe@schmoe.com' width={8}/>
          <Form.Field control={Input} label='Land phone No' placeholder='Land phone No' width={8}/>
          <Form.Field control={Input} label='Mobile phone No' placeholder='Mobile phone No' width={8}/>
          <Form.Field width={8}>
            <label>Personal Address</label>
            <TextArea placeholder='Personal Address' rows='5'/>
          </Form.Field>
          <Button positive>Save Profile</Button>
          <Button>Cancel</Button>
        </Form>
      );
   }
}
export default PersonalProfile;
