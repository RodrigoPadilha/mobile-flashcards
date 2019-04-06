import { 
  createAppContainer, 
  createStackNavigator, 
  StackActions, 
  NavigationActions } from 'react-navigation';
import DeckDetail from '../components/DeckDetail/component'
import DeckList from '../components/DeckList/component'

const AppNavigator = createStackNavigator(
  {
    DeckList: DeckList,  
    DeckDetail:DeckDetail,
  },  
  {
    initialRouteName: "DeckList"
  },    
)
  
export default createAppContainer(AppNavigator);

/*

const AppNavigator = createStackNavigator({
    DeckDetail: {
      screen: DeckDetail,
      navigationOptions:{
        headerTintColor: '#ff00ff',
        headerStyle: {
          backgroundColor: '00ff00'
        }
      }
    },

  })



const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  }, {
      initialRouteName: 'Home',
  });
 */