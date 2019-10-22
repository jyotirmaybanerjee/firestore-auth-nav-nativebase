import React from 'react';
import { Button, Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

export default () => (
  <Container>
    <Header />
    <Content>
      <Card>
        <CardItem header>
          <Text>John Doe</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>Profile</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Button backgroundColor="#03A9F4" title="SIGN OUT" onPress={() => {}} />
        </CardItem>
      </Card>
    </Content>
  </Container>
);
