/**
 * @format
 * @flow
 */

import React from 'react';
import {Text} from 'react-native';
import firebase from '@react-native-firebase/app';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
} from 'native-base';

const App: () => React$Node = () => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content>
        <Text>
          Firebase:
          {!firebase.apps.length && <Text>Problem loading firebase</Text>}
          {firebase.apps.length && <Text>Firebase loaded successfully</Text>}
        </Text>
      </Content>
    </Container>
  );
};

export default App;
