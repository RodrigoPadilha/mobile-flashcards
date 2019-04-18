import { createAppContainer, createStackNavigator} from 'react-navigation';
import DeckDetail from '../components/DeckDetail/component'
import DeckList from '../components/DeckList/component'

const AppNavigator = createStackNavigator(
  {
    DeckList: DeckList,  
    DeckDetail:DeckDetail,
  },  
  {
    initialRouteName: "DeckList",
  },    
)
  
export default createAppContainer(AppNavigator);