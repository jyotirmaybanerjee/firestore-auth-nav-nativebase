import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Container, Content, Form, Icon, Input, Item, Text, Toast } from 'native-base';

import auth from '@react-native-firebase/auth';
import styles from './style';

export class Login extends Component {
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
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('login successful');
          this.props.navigation.navigate('App');
        })
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
            <Text style={{ color: '#e93766', fontSize: 40 }}>Login</Text>
            <Form>
              <Item>
                <Icon active name="mail" />
                <Input
                  placeholder="Email"
                  autoCapitalize="none"
                  style={styles.textInput}
                  onChangeText={email => this.setState({ email })}
                />
              </Item>
              <Item last>
                <Icon active name="lock" />
                <Input
                  placeholder="Password"
                  autoCapitalize="none"
                  style={styles.textInput}
                  onChangeText={password => this.setState({ password })}
                />
              </Item>
              <Button style={styles.loginBtn} rounded block onPress={() => this.login()}>
                <Text>Login</Text>
              </Button>
              <Text
                style={styles.registerLink}
                onPress={() => this.props.navigation.navigate('Register')}
              >
                Not an user ? Register!
              </Text>
            </Form>
          </View>
        </Content>
      </Container>
    );
  }
}
