import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { Styles } from './style';
import { connect } from 'react-redux'
import { loadDecksFromStorage } from '../../redux/actions/DeckAction'

class DeckList extends React.Component {

  componentDidMount(){
    this.props.listOfDecks();
  }

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
})

export default connect(mapStateToProps,mapDispatchToProps)(DeckList);