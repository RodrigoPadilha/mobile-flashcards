import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AppNavigator from './utils/AppNavigator';
import TabNavigator from './utils/TabNavigator'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/reducers/RootReducer'
import { createStore,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { setLocalNotification, testNotification } from './utils/helpers'

import { Constants } from 'expo'
import { purple } from './utils/colors'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
)

function AppStatusBar({backgroundColor, ...props}){
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  
  componentDidMount(){
    setLocalNotification()
    //testNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <AppStatusBar backgroundColor={purple} barStyle='light-content'/>        
        <TabNavigator />
      </Provider>
    );
  }
}