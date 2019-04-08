import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Styles } from './style';

class DeckDetail extends React.Component {  
  render() {    
    const {navigation} = this.props
    const deckKey = navigation.getParam('deckKey')
    return (
      <View style={Styles.container}>        
        <Text>Details Screen </Text>
        <Text>Param: {deckKey}</Text>

        <TouchableHighlight
          style={Styles.btn}
          onPress={() => this.props.navigation.navigate(
            'NewCard',
            {deckKey:deckKey}
          )}
          underlayColor='#e65100'>
          <Text style={Styles.btnText}>Add Card</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[Styles.btn,Styles.btnQuiz]}
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            {deckKey:deckKey}
          )}
          underlayColor='#e65100'>
          <Text style={Styles.btnText}>Iniciar Quiz</Text>
        </TouchableHighlight>

      </View>
    );
  }  
}

export default DeckDetail


/*const DeckDetail = (props, context) =>
  <div>Deck Name: {props.name}</div>

  //<div style={{color: context.color}}>Deck Name: {props.name}</div>



  {this.props.navigation.state.params.deckKey}
*/
