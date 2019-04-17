import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Styles } from './style';
import { BtnDefault } from '../UI/component'
import { 
  clearLocalNotifications,
  setLocalNotification 
} from '../../utils/helpers'

class DeckDetail extends React.Component {  

  startQuiz = (deckKey) => {
    return () => {   
      clearLocalNotifications()
        .then(setLocalNotification)

      this.props.navigation.navigate(
        'Quiz',
        {deckKey:deckKey}
      )
    }
  }

  addNewCard = (deck) => {
    return () => {
      this.props.navigation.navigate(
        'NewCard',
        {deck:deck}
      )
    }
  }

  render() {    
    const {navigation} = this.props
    const deck = navigation.getParam('deck')
    return (
      <View style={Styles.container}>        
        <Text>Details Screen </Text>
        <Text>Param: {deck.deckName}</Text>

        <BtnDefault 
          label='Add Card' 
          onPress={this.addNewCard(deck)}/> 
        
        <BtnDefault 
          label='Inicia Quiz' 
          onPress={this.startQuiz(deck.key)}/>

      </View>
    );
  }  
}

export default DeckDetail