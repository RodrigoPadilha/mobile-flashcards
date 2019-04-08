import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './utils/AppNavigator';
import TabNavigator from './utils/TabNavigator'
import TabNavigatorBottom from './utils/TabNavigatorBottom'

export default class App extends React.Component {
  render() {
    return (
      
        <TabNavigatorBottom />
      
    );
  }
}


/*
<AppNavigator />
<TabNavigator />


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

return (
  <View style={styles.container}>
    <AppNavigator />        
  </View>
);
*/