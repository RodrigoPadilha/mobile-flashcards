 import { Ionicons } from '@expo/vector-icons';
import { 
    createStackNavigator, 
    createBottomTabNavigator, 
    createMaterialTopTabNavigator,
    createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import DeckDetail from '../components/DeckDetail/component';
import DeckList from '../components/DeckList/component';
import NewDeck from '../components/NewDeck/component';
import NewCard from '../components/NewCard/component';
import Quiz from '../components/Quiz/component';

import { orange, white, purple, red } from './colors'

const AppNavigator = createStackNavigator(
  {
    DeckList: {
      screen: DeckList,            
    },     
    
    DeckDetail: {
      screen: DeckDetail,      
    },
    NewCard: {
      screen: NewCard,      
    },
    Quiz:{
      screen:Quiz,
    },
    initialRouteName: "DeckList"    
  }

)
//const TabNavigator = createBottomTabNavigator(
const TabNavigator = createMaterialTopTabNavigator(
  {
    DeckList: {
      screen:AppNavigator,
      navigationOptions:{
        tabBarLabel:'Lista de Decks',          
      }
    },
    NewDeck:{
      screen: NewDeck,
      navigationOptions:{
        tabBarLabel:'Novo Deck',          
      }
    },
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: red,
      },
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

export default createAppContainer(TabNavigator);