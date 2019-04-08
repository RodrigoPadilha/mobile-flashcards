import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Styles } from './style';

class NewDeck extends React.Component {  
  render() {    
    return (      
      <View style={Styles.container}>        
        <Text>New Deck </Text>        
      </View>
    );
  }  
}

export default NewDeck
