import { StyleSheet } from 'react-native';
import { background_view } from '../../utils/colors'

export const Styles = StyleSheet.create({

  container: {    
    backgroundColor: background_view,
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  deckName:{

  },
  btnComands:{
    flexDirection: "row",
    marginTop:30,    
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  btnAddCard:{        
    marginRight:10,    
  },
  btnQuiz:{    
    marginLeft:10,
  }

});