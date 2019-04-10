import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './utils/AppNavigator';
import TabNavigator from './utils/TabNavigator'
import TabNavigatorBottom from './utils/TabNavigatorBottom'
import { Provider } from 'react-redux'
import  deckReducer from './redux/reducers/DeckReducer'
import { createStore } from 'redux';

const store = createStore(
  deckReducer
)

export default class App extends React.Component {
  
  render() {
    return (
      //ToDo mudar o nome do Reducer???
      <Provider store={store}>
        <TabNavigatorBottom />
      </Provider>
    );
  }
}