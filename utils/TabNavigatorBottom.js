import { Ionicons } from '@expo/vector-icons';
import { 
    createStackNavigator, 
    createBottomTabNavigator, 
    createAppContainer } from 'react-navigation';
import DeckDetail from '../components/DeckDetail/component';
import DeckList from '../components/DeckList/component';
import NewDeck from '../components/NewDeck/component';
import {orange} from './colors'

const AppNavigator = createStackNavigator(
  {
    DeckList: {
      screen: DeckList,            
    },     
    
    DeckDetail: {
      screen: DeckDetail,      
    },        
    initialRouteName: "DeckList"    
  }

)

const TabNavigator = createBottomTabNavigator(
  {
    DeckList: {
      screen:AppNavigator
    },
    NewDeck:{
      screen: NewDeck,
      navigationOptions:{
        tabBarLabel:'Novo Deck',          
      }
    },
  }
)

export default createAppContainer(TabNavigator);