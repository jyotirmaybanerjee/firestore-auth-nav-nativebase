import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Form, Item, Input, Label, Text, Toast } from 'native-base';
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
      console.log(e.message);
      Toast.show({
        text: e.message,
        buttonText: 'Ok',
        type: 'danger'
      });
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
        <Button style={StyleSheet.registerBtn} block rounded onPress={() => this.register()}>
          <Text>Register</Text>
        </Button>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  registerBtn: {
    marginTop: 30
  }
});
