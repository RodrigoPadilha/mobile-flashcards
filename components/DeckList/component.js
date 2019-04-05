import React, { Component } from 'react';
import { AppRegistry, FlatList, TouchableOpacity, Text, View } from 'react-native';
import { Styles } from './style';

class DeckList extends React.Component {

  selectItem = (data) => console.log("Chamou ", data.key)


  FlatListItemSeparator = (styles) => <View style={styles.line} />

  renderItem = (item, styles) => 
    <TouchableOpacity
      style={styles.list}
      onPress={() => this.selectItem(item)}>
      <Text style={styles.item}>{item.key}</Text>
    </TouchableOpacity>  
    
  render() {
    const listItens = [{key: 'Devin'},{key: 'Jackson'},{key: 'James'},{key: 'Joel'},{key: 'John'},{key: 'Jillian'},{key: 'Jimmy'},{key: 'Julie'},]
    debugger
    return (      
      <View style={Styles.container}>  
        <FlatList
          data={listItens}
          ItemSeparatorComponent={() => this.FlatListItemSeparator(Styles)}
          renderItem={({item}) => this.renderItem(item,Styles)}
          keyExtractor={(item) => item.key}
        />
      </View>
    );
  }
}

export default DeckList 