import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Styles } from './style';

class DeckDetail extends React.Component {  
  render() {    
    const {navigation} = this.props
    return (      
      <View style={Styles.container}>        
        <Text>Details Screen </Text>
        <Text>Param: {navigation.getParam('deckKey')}</Text>
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
