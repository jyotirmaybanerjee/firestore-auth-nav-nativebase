/**
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Container, Header, Left, Body, Title, Subtitle, Right, Icon } from 'native-base';

import Login from './src/Login';
import Register from './src/Register';
import { Todos } from './src/Todos';

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
  console.log('user- ', user);

  let content = <Todos />;

  if (!user) {
    content = (
      <>
        {!showRegister && (
          <>
            <Login />
            <Text onPress={() => setShowRegister(true)}>Not an user ? Register!</Text>
          </>
        )}
        {showRegister && <Register />}
      </>
    );
  }

  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Title</Title>
          <Subtitle>Welcome {user ? user.email : ''}</Subtitle>
        </Body>
        <Right>
          <Icon name="ios-power" onPress={() => onSignout()} />
        </Right>
      </Header>
      {content}
    </Container>
  );
};

export default App;
