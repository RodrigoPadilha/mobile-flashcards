import React from 'react';
import { connect } from 'react-redux'
import { v4 } from 'uuid'

import { Text, View } from 'react-native';
import { Styles } from './style';
import { BtnDefault, TxtInput, HintDialog } from '../UI/component';
import { addDeckToStorage } from '../../redux/actions/DeckAction'

class NewDeck extends React.Component {  

  state = { 
    descNewDeck: '' 
  }

  redirectToNewDeck = (key) => {
    return () => {
      this.props.navigation.navigate(
        'DeckDetail',
        {deckKey:key}
      )
    }
  }

  newDeck = () => {      
    if(this.state.descNewDeck.trim().length > 0){
      const newDeck = {
        key:v4(), 
        deckName:this.state.descNewDeck, 
        qtdCards:0
      }
      this.props.addDeck(newDeck)          
      HintDialog({title:"Sucesso", text:"DeckCriado com Sucesso",onPressOK:this.redirectToNewDeck(newDeck.key)})
    } else {
      HintDialog({title:"Erro", text:"Valores em branco não são permitidos"})
    }
  }

  onChange = (descNewDeck) => {
    this.setState({descNewDeck})
  }

  render() {    
    return (      
      <View style={Styles.container}>        
        <View style={Styles.text}><Text>Cadastre um novo assunto para seus estudos</Text></View>
        <View style={Styles.deckName}><TxtInput hint='Nome novo Deck' onChangeText={this.onChange}/></View>
        <View style={Styles.btnConfirmar}><BtnDefault label='CONFIRMAR' onPress={this.newDeck}/></View>
      </View>
    );
  }  
}


const mapDispatchToProps = (dispatch) => ({   
  addDeck: (newDeckName) => dispatch(addDeckToStorage(newDeckName))  
})

export default connect(null,mapDispatchToProps)(NewDeck);
