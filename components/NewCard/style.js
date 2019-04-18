import { StyleSheet } from 'react-native';
import { background_view } from '../../utils/colors'

export const Styles = StyleSheet.create({

  container: {    
    backgroundColor: background_view,
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },

  txtQuestion:{
    marginTop:10,
  },

  txtAnswer:{
    marginTop:10,
  },

  btnConfirmar:{    
    marginTop:50,
  },

});