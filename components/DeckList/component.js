import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Text, View, Image } from 'react-native';
import { connect } from 'react-redux'

import { loadDecksFromStorage, deleteDeckFromStorage } from '../../redux/actions/DeckAction'
import { Styles } from './style';
import { BtnImage } from '../UI/component';


class DeckList extends React.Component {

  componentDidMount(){
    this.props.listOfDecks();    
  }

  deleteDeck = (deckKey) => {
    return () => {
      this.props.deleteDeck(deckKey)   
    }
  }

  FlatListItemSeparator = () => <View style={Styles.line} />

  renderItem = (item) => 
    <TouchableOpacity
      style={Styles.list}
      onPress={() => this.props.navigation.navigate(
        'DeckDetail',
        {deckKey:item.key}
      )}>
      <View style={Styles.itemList}>
        <Text style={Styles.deckName}>{item.deckName}</Text>  
        <Text>{item.qtdCards} cartas</Text>    
        <View style={Styles.icDelete}><BtnImage srcImage={require('../../img/ic_delete.png')} onPress={this.deleteDeck(item.key)}/></View>
      </View>
    </TouchableOpacity>  
    
  renderHeader = () => {
    return <Text>Lista de Decks</Text>;
  };
  render() {
    const { deckList } = this.props
    return (      
      <View style={Styles.container}>    
        <FlatList
          data={deckList}
          //ListHeaderComponent={this.renderHeader}
          //ItemSeparatorComponent={() => this.FlatListItemSeparator()}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={(item) => item.key}
        />
      </View>
    );
  }
}

const mapStateToProps = (state,props) => ({
  deckList: state.storeDecks.deckList,
});

const mapDispatchToProps = (dispatch) => ({     
  listOfDecks: () => dispatch(loadDecksFromStorage()),   
  deleteDeck: (deckKey) => dispatch(deleteDeckFromStorage(deckKey))       
})

export default connect(mapStateToProps,mapDispatchToProps)(DeckList);