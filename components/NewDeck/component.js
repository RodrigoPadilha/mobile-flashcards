import React from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Styles } from './style';
import { BtnDefault, TxtInput } from '../UI/component';

class NewDeck extends React.Component {  

  state = { 
    text: 'Useless Placeholder' 
  }

  teste = () => {   
    this.props.navigation.navigate(
      'Quiz',
       console.log("Adicionar no store e/ou no defaultStore")
    )
  }

  onChange = (text) => {
    this.setState({text})
  }

  render() {    
    return (      
      <View style={Styles.container}>        
        <Text> Qual o título do seu novo Deck?</Text>  
        <TxtInput hint='Nome novo Deck' onChangeText={this.onChange}/>              
        <BtnDefault label='Rodrigo' onPress={this.teste}/>

        <Text>{this.state.text}</Text>
      </View>
    );
  }  
}

export default NewDeck


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