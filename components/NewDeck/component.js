import React from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Styles } from './style';

class NewDeck extends React.Component {  

  state = { 
    text: 'Useless Placeholder' 
  }
  render() {    
    return (      
      <View style={Styles.container}>        
        <Text> Qual o título do seu novo Deck?</Text>  
        <TextInput
          style={Styles.lblTitulo}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />      

        <TouchableHighlight
          style={[Styles.btn,Styles.btnQuiz]}
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            console.log("Adicionar no store e/ou no defaultStore")
          )}
          underlayColor='#e65100'>
          <Text style={Styles.btnText}>Add Deck</Text>
        </TouchableHighlight>
        
      </View>
    );
  }  
}

export default NewDeck
