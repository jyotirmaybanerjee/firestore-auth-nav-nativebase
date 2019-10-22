import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Form,
  Header,
  Icon,
  Item,
  Left,
  Picker,
  Right,
  Spinner,
  Subtitle,
  Text,
  Title
} from 'native-base';
import firestore from '@react-native-firebase/firestore';
import Todo from './Todo';

export const Todos = ({ navigation }) => {
  const [todo, setTodo] = useState('');
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const ref = firestore().collection('todos');

  async function addTodo() {
    const newTodo = {
      title: todo,
      complete: false
    };
    await ref.add(newTodo);
    setTodo('');
  }

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const { title, complete } = doc.data();
        list.push({
          id: doc.id,
          title,
          complete
        });
      });
      setTodos(list);
      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Todos</Title>
          <Subtitle>Welcome</Subtitle>
        </Body>
        <Right>
          <Icon name="ios-power" onPress={() => navigation.navigate('Signout')} />
        </Right>
      </Header>
      <Content>
        <Text>List of TODOs!</Text>
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Todo {...item} />}
        />
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              style={{ width: undefined }}
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select task"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              selectedValue={todo}
              onValueChange={setTodo}
            >
              <Picker.Item label="Shop" value="shop" />
              <Picker.Item label="Eat" value="eat" />
              <Picker.Item label="Sleep" value="sleep" />
            </Picker>
          </Item>
          <Button block onPress={() => addTodo()}>
            <Text>Add TODO</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};
