import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({

  container: {    
    backgroundColor: '#9ccc65',
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  txtAnswer:{
    justifyContent: 'center',
  },
  btnComands:{
    flexDirection: "row",
    marginTop:30,    
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  btnCorrect:{    
    marginRight:10,    
  },
  btnWrong:{    
    marginLeft:10,
  }

});