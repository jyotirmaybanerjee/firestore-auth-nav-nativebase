import React, { Component } from 'react';
import { Button, Form, Item, Input, Label, Text } from 'native-base';
import auth from '@react-native-firebase/auth';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  async register() {
    const { email, password } = this.state;
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.error(e.message);
    }
  }

  render() {
    return (
      <Form>
        <Item floatLabel>
          <Label>Email</Label>
          <Input autoCapitalize="none" onChangeText={email => this.setState({ email })} />
        </Item>
        <Item floatLabel last>
          <Label>Password</Label>
          <Input autoCapitalize="none" onChange={password => this.setState({ password })} />
        </Item>
        <Button block onPress={() => this.register()}>
          <Text>Register</Text>
        </Button>
      </Form>
    );
  }
}
