import { StyleSheet } from 'react-native';
import { background_view } from '../../utils/colors'

export const Styles = StyleSheet.create({

  container: {    
    backgroundColor: background_view,
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  btn:{
    backgroundColor:'#E53224',
    padding: 10,
    paddingLeft:50,
    paddingRight:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
  },
  btnText:{
    color:'#fff'
  }

});