import React from 'react';
import { connect } from 'react-redux'
import { v4 } from 'uuid'

import { Text, View } from 'react-native';
import { Styles } from './style';
import { BtnDefault, TxtInput } from '../UI/component';
import { addCardToStorage } from '../../redux/actions/CardAction';

class NewCard extends React.Component {  

  state = { 
    descNewCard: 'Novo Cartão' 
  }

  onChange = (descNewCard) => {
    this.setState({descNewCard})
  }

  newCard = (deckKey) => {
    console.log('Passando objeto para o Action')
    return () => {      
      this.props.addCard({
          key: v4(),
          parent: deckKey,
          question: this.state.descNewCard
      })
    }
  }

  render() {        
    const {navigation} = this.props
    const deckKey = navigation.getParam('deckKey')
    return (
        <View style={Styles.container}>        
          <Text>New Card neste cara aqui: {deckKey} </Text>
          <TxtInput hint='Nome novo Card' onChangeText={this.onChange}/>              
          <BtnDefault label='CONFIRMAR' onPress={this.newCard(deckKey)}/>
        </View>
    );
  }
}

//export default NewCard


const mapDispatchToProps = (dispatch) => ({   
  addCard: (card) => dispatch(addCardToStorage(card))  
})

export default connect(null,mapDispatchToProps)(NewCard);
