import React from 'react';
import { connect } from 'react-redux'

import { Text, View } from 'react-native';
import { Styles } from './style';
import { BtnDefault, TxtInput } from '../UI/component';

//import { addCard } from '../../redux/actions/???'

class NewCard extends React.Component {  

  state = { 
    descNewCard: 'Novo Cartão' 
  }

  onChange = (descNewCard) => {
    this.setState({descNewCard})
  }

  newCard = () => {
    console.log("Adicionar o card: ", this.state.descNewCard)
    //this.props.addCard(this.state.descNewCard)
  }

  render() {        
    const {navigation} = this.props
    const deckKey = navigation.getParam('deckKey')
    return (
        <View style={Styles.container}>        
          <Text>New Card neste cara aqui: {deckKey} </Text>
          <TxtInput hint='Nome novo Card' onChangeText={this.onChange}/>              
          <BtnDefault label='CONFIRMAR' onPress={this.newCard}/>
        </View>
    );
  }
}

export default NewCard

/*
const mapDispatchToProps = (dispatch) => ({   
  addCard: (newDeckName) => dispatch(addCard(newDeckName))  
})
*/
//export default connect(null,mapDispatchToProps)(NewCard);
