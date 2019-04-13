import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Text, View, Image } from 'react-native';
import { Styles } from './style';
import { connect } from 'react-redux'
import { loadDecksFromStorage, deleteDeckFromStorage } from '../../redux/actions/DeckAction'
import { BtnImage } from '../UI/component';
import ic_delete from '../../img/ic_delete.png';


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
      <Text style={Styles.item}>{item.deckName}</Text>      
      <BtnImage srcImage={require('../../img/ic_delete.png')} onPress={this.deleteDeck(item.key)}/>
    </TouchableOpacity>  
    
  render() {
    const { deckList } = this.props
    return (      
      <View style={Styles.container}>        
        <FlatList
          data={deckList}
          ItemSeparatorComponent={() => this.FlatListItemSeparator()}
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