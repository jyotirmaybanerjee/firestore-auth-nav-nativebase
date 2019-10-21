import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { ListItem, Text, Left, Right, Icon } from 'native-base';

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
    <ListItem onPress={() => toggleComplete()}>
      <Left>{complete ? <Icon name="ios-checkmark" /> : <Icon name="ios-code-working" />}</Left>
      <Right>
        <Text>{title}</Text>
      </Right>
    </ListItem>
  );
};

export default React.memo(Todo);
