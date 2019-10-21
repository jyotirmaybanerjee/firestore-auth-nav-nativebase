import React, { Component } from 'react';
import { Button, Container, Content, Form, Item, Input, Text } from 'native-base';
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
      <Container>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Email"
                autoCapitalize="none"
                onChange={email => this.setState({ email })}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Password"
                autoCapitalize="none"
                onChange={password => this.setState({ password })}
              />
            </Item>
            <Button block onPress={() => this.register()}>
              <Text>Register</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
