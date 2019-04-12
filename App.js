import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './utils/AppNavigator';
import TabNavigator from './utils/TabNavigator'
import TabNavigatorBottom from './utils/TabNavigatorBottom'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/reducers/RootReducer'
import { createStore,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
)

export default class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <TabNavigatorBottom />
      </Provider>
    );
  }
}