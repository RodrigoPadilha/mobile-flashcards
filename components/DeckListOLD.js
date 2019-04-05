import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class DeckList extends Component {

  state = {
    listItens: [
      {key: 'Devin'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},      
    ]
  }
  FlatListItemSeparator = () => <View style={styles.line} />;

  renderItem = (item,styles) => {
    <Text style={styles.item}>{item.key}</Text>
  }
    
  render() {
    const {listItens} = this.state

    return (
      <View style={styles.container}>
        <FlatList
          data={listItens}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item,styles)} 
          keyExtractor={item => item.key}
        />
      </View>
    );
  }
}

export default DeckList 

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

        {/*<FlatList
          data={listItens}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />*/}