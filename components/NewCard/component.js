import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import { Styles } from './style';

class NewCard extends React.Component {  
  render() {    
    const {navigation} = this.props
    const deckKey = navigation.getParam('deckKey')
    return (
        <View style={Styles.container}>        
          <Text>New Card neste cara aqui: {deckKey} </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
    );
  }
}

export default NewCard
