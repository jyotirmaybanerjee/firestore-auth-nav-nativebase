import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Left,
  Right,
  Body
} from 'native-base';
import styles from './styles';

class Counter extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Counter (Redux)</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem header button onPress={() => this.props.dispatch({ type: 'INCREMENT' })}>
              <Text>Increment</Text>
            </CardItem>
            <CardItem button onPress={() => alert('This is Card Body')}>
              <Body>
                <Text>{this.props.count}</Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => this.props.dispatch({ type: 'DECREMENT' })}>
              <Text>Decrement</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default connect(state => ({ count: state.count }))(Counter);
