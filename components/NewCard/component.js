import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import { Styles } from './style';

class NewCard extends React.Component {  

  state = { 
    text2: 'Useless Placeholder' 
  }

  render() {        
    const {navigation} = this.props
    const deckKey = navigation.getParam('deckKey')
    return (
        <View style={Styles.container}>        
          <Text>New Card neste cara aqui: {deckKey} </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text2) => this.setState({text2})}
            value={this.state.text2}
          />
        </View>
    );
  }
}

export default NewCard
