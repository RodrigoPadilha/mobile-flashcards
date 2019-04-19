import React from 'react';
import { connect } from 'react-redux'
import { v4 } from 'uuid'

import { Text, View } from 'react-native';
import { Styles } from './style';
import { BtnDefault, TxtInput, HintDialog } from '../UI/component';
import { addCardToStorage } from '../../redux/actions/CardAction';

class NewCard extends React.Component {  

  static navigationOptions = {
    title: 'Novo Cartão',
  };

  state = { 
    descQuestion: '', 
    descAnswer: ''
  }

  constructor(){
    super();

    this.cleanStates = this.cleanStates.bind(this)
  }
  onChangeQuestion = (descQuestion) => {
    this.setState({descQuestion})
  }
  onChangeAnswer = (descAnswer) => {
    this.setState({descAnswer})
  }

  cleanStates = () => this.setState({descQuestion:'',descAnswer:''})  

  newCard = (deckKey) => {    
    return () => {
      if(this.state.descQuestion.trim().length == 0) {
        HintDialog({title:"Erro", text:"Valores em branco não são permitidos como pergunta"})
      } else if(this.state.descAnswer.trim().length == 0) {      
        HintDialog({title:"Erro", text:"Valores em branco não são permitidos como resposta"})
      } else {
        this.props.addCard({
            key: v4(),
            parent: deckKey,
            question: this.state.descQuestion,
            answer: this.state.descAnswer,
        })
        HintDialog({title:"Sucesso", text:"Card criado com sucesso",onPressOK:this.cleanStates})        
      }
    }
  }

  render() {        
    const {navigation} = this.props
    const deck = navigation.getParam('deck')
    return (
        <View style={Styles.container}>        
          <Text>Adicione cartões ao Deck {deck.deckName}</Text>
          <View style={Styles.txtQuestion}><TxtInput hint='Nome novo Card' onChangeText={this.onChangeQuestion}/></View>
          <View style={Styles.txtAnswer}><TxtInput hint='Resposta' onChangeText={this.onChangeAnswer}/></View>
          <View style={Styles.btnConfirmar}><BtnDefault label='CONFIRMAR' onPress={this.newCard(deck.key)}/></View>
        </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({   
  addCard: (card) => dispatch(addCardToStorage(card)),  
})

export default connect(null,mapDispatchToProps)(NewCard);
