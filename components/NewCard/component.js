import React from 'react';
import { connect } from 'react-redux'
import { v4 } from 'uuid'

import { Text, View } from 'react-native';
import { Styles } from './style';
import { BtnDefault, TxtInput } from '../UI/component';
import { addCardToStorage } from '../../redux/actions/CardAction';

class NewCard extends React.Component {  

  state = { 
    descQuestion: 'Peergunta', 
    descAnswer: 'Resposta'
  }

  onChangeQuestion = (descQuestion) => {
    this.setState({descQuestion})
  }
  onChangeAnswer = (descAnswer) => {
    this.setState({descAnswer})
  }

  newCard = (deckKey) => {
    return () => {      
      this.props.addCard({
          key: v4(),
          parent: deckKey,
          question: this.state.descQuestion,
          answer: this.state.descAnswer
      })
    }
  }

  render() {        
    const {navigation} = this.props
    const deck = navigation.getParam('deck')
    return (
        <View style={Styles.container}>        
          <Text>Adicione cartões para ao Deck {deck.deckName} </Text>
          <TxtInput hint='Nome novo Card' onChangeText={this.onChangeQuestion}/>              
          <TxtInput hint='Resposta' onChangeText={this.onChangeAnswer}/>              
          <BtnDefault label='CONFIRMAR' onPress={this.newCard(deck.key)}/>
        </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({   
  addCard: (card) => dispatch(addCardToStorage(card))  
})

export default connect(null,mapDispatchToProps)(NewCard);
