import React from 'react';
import { Button, Container, H3, Header, Content, Card, CardItem, Body, Text } from 'native-base';

export default () => (
  <Container>
    <Header />
    <Content>
      <Card>
        <CardItem header>
          <H3>Main</H3>
        </CardItem>
        <CardItem>
          <Body>
            <Text>main</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Button backgroundColor="#03A9F4" title="SIGN OUT" onPress={() => {}} />
        </CardItem>
      </Card>
    </Content>
  </Container>
);
