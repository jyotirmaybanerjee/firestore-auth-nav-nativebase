import React, { Component } from 'react';
import { Button, Container, Content, Form, Item, Input, Text } from 'native-base';
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
      <Container>
        <Content>
          <Form>
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
        </Content>
      </Container>
    );
  }
}
