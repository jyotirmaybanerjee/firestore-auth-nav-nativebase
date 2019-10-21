import React from 'react';
import { Button, Container, Content, H3, Header, Icon, Left, Text } from 'native-base';

export const Settings = ({ navigation }) => (
  <Container>
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
    </Header>
    <Content>
      <H3>Settings</H3>
      <Button onPress={() => navigation.navigate('Confirm')}>
        <Text>Confirm</Text>
      </Button>
    </Content>
  </Container>
);
