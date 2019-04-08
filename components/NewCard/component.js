import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Styles } from './style';

class NewCard extends React.Component {  
  render() {    
    const {navigation} = this.props
    const deckKey = navigation.getParam('deckKey')
    return (
        <View style={Styles.container}>        
        <Text>New Card neste cara aqui: {deckKey} </Text>

        </View>
    );
  }
}

export default NewCard
