/**
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Container, Content, Header, Left, Body, Right } from 'native-base';

export const Landing = ({ navigation }) => {
  // Set an initilizing state whilst Firebase connects
  const [initilizing, setInitilizing] = useState(true);
  const [user, setUser] = useState(); // Handle user state changes

  function onAuthStateChanged(usr) {
    setUser(usr);
    if (initilizing) setInitilizing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const initialView = (
    <Container>
      <Header>
        <Left />
        <Body />
        <Right />
      </Header>
      <Content>
        <Text style={{ color: '#e93766', fontSize: 40 }}>Loading</Text>
        <ActivityIndicator color="#e93766" size="large" />
      </Content>
    </Container>
  );

  if (initilizing) {
    return initialView;
  }

  if (user) {
    navigation.navigate('App');
  } else {
    navigation.navigate('Auth');
  }
  return initialView;
};
