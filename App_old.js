/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Icon,
  Right,
  Root,
  Title,
  Subtitle
} from 'native-base';

import { Login } from './src/auth/Login';
import { Register } from './src/auth/Register';
import { Todos } from './src/todo/Todos';
// import Home from './src/Home';

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    padding: 10,
    marginTop: 50
  },
  registerLink: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const App = () => {
  // Set an initilizing state whilst Firebase connects
  const [initilizing, setInitilizing] = useState(true);
  const [user, setUser] = useState();
  const [showRegister, setShowRegister] = useState(false);

  // Handle user state changes
  function onAuthStateChanged(usr) {
    setUser(usr);
    setShowRegister(false);
    if (initilizing) setInitilizing(false);
  }

  function onSignout() {
    auth().signOut();
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initilizing) return null;

  if (user) {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Todo</Title>
            <Subtitle>Welcome {user ? user.email : ''}</Subtitle>
          </Body>
          <Right>{user && <Icon name="ios-power" onPress={onSignout} />}</Right>
        </Header>
        <Content>
          <Todos user={user} />
        </Content>
      </Container>
    );
  }

  return (
    <Root>
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Auth</Title>
            <Subtitle>Welcome {user ? user.email : ''}</Subtitle>
          </Body>
          <Right>{user && <Icon name="ios-power" onPress={onSignout} />}</Right>
        </Header>
        <Content>
          <View style={styles.authContainer}>
            {!showRegister && (
              <>
                <Login />
                <Text style={styles.registerLink} onPress={() => setShowRegister(true)}>
                  Not an user ? Register!
                </Text>
              </>
            )}
            {showRegister && <Register />}
          </View>
        </Content>
      </Container>
    </Root>
  );
};

export default App;
