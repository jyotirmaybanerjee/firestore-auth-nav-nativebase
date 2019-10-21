import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

export class Signout extends React.Component {
  componentDidMount() {
    auth().signOut();
    this.props.navigation.navigate('Landing');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Signing out...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
