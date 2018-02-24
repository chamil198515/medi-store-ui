import React from 'react';
import { Form,TextArea,Button,Input } from 'semantic-ui-react'

class BusinessProfile extends React.Component {
   render() {
      return (
        <Form>
          <Form.Field control={Input} label='Pharmacy Name' placeholder='Pharmacy Name' width={8}/>
          <Form.Field control={Input} label='Email' placeholder='pharmacy@schmoe.com' width={8}/>
          <Form.Field control={Input} label='Contact No' placeholder='Contact No' width={8}/>
          <Form.Field width={8}>
            <label>Address</label>
            <TextArea placeholder='Address' rows='5'/>
          </Form.Field>
          <Button positive>Save Profile</Button>
          <Button>Cancel</Button>
        </Form>
      );
   }
}
export default BusinessProfile;
