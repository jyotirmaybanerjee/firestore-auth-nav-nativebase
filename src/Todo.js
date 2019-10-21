import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { Container, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';

const Todo = ({ id, title, complete }) => {
  async function toggleComplete() {
    await firestore()
      .collection('todos')
      .doc(id)
      .update({
        complete: !complete
      });
  }

  return (
    <Container>
      <Content>
        <List>
          <ListItem onPress={() => toggleComplete()}>
            <Text>{title}</Text>
          </ListItem>
          <ListItem>
            <Left>
              {complete ? <Icon name="ios-checkmark" /> : <Icon name="ios-code-working" />}
            </Left>
            <Right>
              <Text>{title}</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default React.memo(Todo);
