import { StyleSheet } from 'react-native';
import { background_view, orange } from '../../utils/colors'

export const Styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: background_view,
    paddingVertical: 50,
    position: "relative"
  },
  list: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: "row",
    backgroundColor: orange,
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: -1
  },
  deckName: {
    padding: 10,
    fontSize: 18,
    height: 44,    
  },
  line: {
    height: 2,
    width: "100%",
    backgroundColor:"rgba(255,255,255,0.5)"
  },
  itemList:{
    flexDirection:'row',
    alignItems: 'center',    
  },
});