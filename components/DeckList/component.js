import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { Styles } from './style';
import { connect } from 'react-redux'

class DeckList extends React.Component {

  FlatListItemSeparator = () => <View style={Styles.line} />

  renderItem = (item) => 
    <TouchableOpacity
      style={Styles.list}
      onPress={() => this.props.navigation.navigate(
        'DeckDetail',
        {deckKey:item.key}
      )}>
      <Text style={Styles.item}>{item.key}</Text>
    </TouchableOpacity>  
    
  render() {
    const listItens = [{key: 'Julia'},{key: 'Mariana'},{key: 'Ro'},{key: 'Joel'},{key: 'John'},{key: 'Jillian'},{key: 'Jimmy'},{key: 'Julie'},]
    return (      
      <View style={Styles.container}>        
        <FlatList
          data={listItens}
          ItemSeparatorComponent={() => this.FlatListItemSeparator()}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={(item) => item.key}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  storeDeck: state.deckReducer,
});

export default connect(mapStateToProps) (DeckList)
//export default DeckList