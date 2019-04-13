import React from 'react';
import { connect } from 'react-redux'
import { v4 } from 'uuid'

import { Text, View } from 'react-native';
import { Styles } from './style';
import { BtnDefault, TxtInput } from '../UI/component';
import { addDeck } from '../../redux/actions/DeckAction'

class NewDeck extends React.Component {  

  state = { 
    descNewDeck: 'Novo Deck' 
  }

  newDeck = () => {       
    this.props.addDeck({key:v4(), deckName:this.state.descNewDeck})
    /*
      this.props.navigation.navigate(
        'Quiz',
        console.log("Adicionar no store e/ou no defaultStore")
      )
    */
  }

  onChange = (descNewDeck) => {
    this.setState({descNewDeck})
  }

  render() {    
    return (      
      <View style={Styles.container}>        
        <Text> Qual o título do seu novo Deck?</Text>  
        <TxtInput hint='Nome novo Deck' onChangeText={this.onChange}/>              
        <BtnDefault label='CONFIRMAR' onPress={this.newDeck}/>
      </View>
    );
  }  
}


const mapDispatchToProps = (dispatch) => ({   
  addDeck: (newDeckName) => dispatch(addDeck(newDeckName))  
})

export default connect(null,mapDispatchToProps)(NewDeck);
//export default NewDeck

//addDeck

/*
        <TouchableHighlight
          style={[Styles.btn,Styles.btnQuiz]}
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            console.log("Adicionar no store e/ou no defaultStore")
          )}
          underlayColor='#e65100'>
          <Text style={Styles.btnText}>Add Deck</Text>
        </TouchableHighlight>

*/