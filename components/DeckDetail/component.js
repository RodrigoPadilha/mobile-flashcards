/*const DeckDetail = (props, context) =>
  <div>Deck Name: {props.name}</div>

  //<div style={{color: context.color}}>Deck Name: {props.name}</div>
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
  class DeckDetail extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
      );
    }  
  }

  export default DeckDetail