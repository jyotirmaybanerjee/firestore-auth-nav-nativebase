import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Container, Content, Form, Input, Item, Label, Text, Toast } from 'native-base';
import auth from '@react-native-firebase/auth';
import styles from './style';

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.register = this.register.bind(this);
  }

  async register() {
    const { email, password } = this.state;
    try {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Todos'))
        .catch(e =>
          Toast.show({
            text: e.message,
            buttonText: 'Try Again',
            type: 'danger'
          })
        );
    } catch (e) {
      console.log(e.message);
      Toast.show({
        text: e.message,
        buttonText: 'Try Again',
        type: 'danger'
      });
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.container}>
            <Text style={{ color: '#e93766', fontSize: 40 }}>Sign Up</Text>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input autoCapitalize="none" onChangeText={email => this.setState({ email })} />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input
                  secureTextEntry
                  autoCapitalize="none"
                  onChangeText={password => this.setState({ password })}
                />
              </Item>
              <Button style={styles.registerBtn} block rounded onPress={this.register}>
                <Text>Register</Text>
              </Button>
              <Text
                style={styles.loginLink}
                onPress={() => this.props.navigation.navigate('Login')}
              >
                Already have an account ? Login!
              </Text>
            </Form>
          </View>
        </Content>
      </Container>
    );
  }
}
