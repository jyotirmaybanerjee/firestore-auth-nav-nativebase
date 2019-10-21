/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Navigator from './Navigator';

import { counter } from './reducer';
// A very simple store
const store = createStore(combineReducers({ count: counter }));

// Render the app container component with the provider around it
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <Navigator />
        </Root>
      </Provider>
    );
  }
}
