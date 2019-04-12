import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Styles } from './style';
import { BtnDefault } from '../UI/component'

class DeckDetail extends React.Component {  

  startQuiz = () => {   
    this.props.navigation.navigate(
      'Quiz',
       console.log("Adicionar no store e/ou no defaultStore")
    )
  }

  addNewCard = (deckKey) => {
    return () => {
      this.props.navigation.navigate(
        'NewCard',
        {deckKey:deckKey}
      )
    }
  }

  render() {    
    const {navigation} = this.props
    const deckKey = navigation.getParam('deckKey')
    return (
      <View style={Styles.container}>        
        <Text>Details Screen </Text>
        <Text>Param: {deckKey}</Text>

        <BtnDefault 
          label='Add Card' 
          onPress={this.addNewCard(deckKey)}/>
        
        <BtnDefault 
          label='Inicia Quiz' 
          onPress={this.startQuiz}/>

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



  {/*
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
    </TouchableHighlight>*/}