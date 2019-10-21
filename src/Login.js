import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Form, Icon, Item, Input, Text, Toast } from 'native-base';
import auth from '@react-native-firebase/auth';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  async login() {
    const { email, password } = this.state;
    try {
      await auth().signInWithEmailAndPassword(email, password);
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
      <Form style={styles.container}>
        <Item>
          <Icon active name="mail" />
          <Input
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
          />
        </Item>
        <Item last>
          <Icon active name="mail" />
          <Input
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button style={styles.loginBtn} rounded block onPress={() => this.login()}>
          <Text>Login</Text>
        </Button>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  loginBtn: {
    marginTop: 30
  }
});
