import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import DeckDetail from '../components/DeckDetail/component'

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
  
export default createAppContainer(AppNavigator);

/*
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