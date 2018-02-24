import React from 'react'
import {
  Button,
  Header,
  Icon,
  Modal,
  Form,
  Input,
  TextArea
} from 'semantic-ui-react'

class SignUpModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModel: false
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({isOpenModel: false});
  }
  openModal() {
    this.setState({isOpenModel: true});
  }
  render() {
    return (<Modal open={this.state.isOpenModel} onClose={this.closeModal}>
      <Header icon='user' content='Sign up'/>
      <Modal.Content>
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
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={this.closeModal}>
          Cancel
        </Button>
        <Button color='green'>
          Sign up
        </Button>
      </Modal.Actions>
    </Modal>);
  }
}
export default SignUpModel;
