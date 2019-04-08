import { Platform } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import DeckList from '../components/DeckList/component'
import NewDeck from '../components/NewDeck/component'

const TabNavigator = createBottomTabNavigator({
    DeckList: DeckList,
    NewDeck: NewDeck,
  });
  
export default createAppContainer(TabNavigator);