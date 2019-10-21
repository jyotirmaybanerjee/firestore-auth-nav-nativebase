import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Form, Item, Input, Text } from 'native-base';
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
      console.error(e.message);
    }
  }

  render() {
    return (
      <Form style={styles.container}>
        <Item>
          <Input
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button block onPress={() => this.login()}>
          <Text>Login</Text>
        </Button>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
