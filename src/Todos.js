import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Button, Container, Content, Form, Icon, Item, Picker, Text, Spinner } from 'native-base';
import firestore from '@react-native-firebase/firestore';
import Todo from './Todo';

export const Todos = () => {
  const [todo, setTodo] = useState('');
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  const ref = firestore().collection('todos');

  async function addTodo() {
    await ref.add({
      title: todo,
      complete: false
    });
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
      <Content>
        <Text>List of TODOs!</Text>
        <FlatList
          style={{ flex: 1 }}
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
