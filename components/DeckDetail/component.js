import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'

import { Styles } from './style';
import { BtnDefault } from '../UI/component';

class DeckDetail extends React.Component {  
  
  static navigationOptions = {
    title: 'Detalhes do Deck',
  };

  startQuiz = (deckKey) => {
    return () => {   
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
    const deckKeyParam = this.props.navigation.getParam('deckKey')         
    const deck = this.props.deckList.find(deck => deck.key === deckKeyParam)   
    
    if(deck){
      return (
        <View style={Styles.container}>              
          <Text>{deck.deckName}</Text>
          <Text>Esse baralho possui {deck.qtdCards} cartas</Text>
          <View style={Styles.btnComands}>        
            
            <View style={Styles.btnAddCard}>
              <BtnDefault                
                label='Add Card' 
                onPress={this.addNewCard(deck)}/> 
            </View>

            <View style={Styles.btnQuiz}>
              <BtnDefault                       
                label='Inicia Quiz' 
                onPress={this.startQuiz(deck.key)}/>
            </View>

          </View>
        </View>
      );
    }
    
    return <Text>Deck Não encontrado</Text>
  }  
}

const mapStateToProps = (state,props) => ({
  deckList: state.storeDecks.deckList,
});

export default connect(mapStateToProps,null)(DeckDetail);