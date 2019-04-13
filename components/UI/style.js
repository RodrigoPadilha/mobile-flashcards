import { StyleSheet } from 'react-native';
import { orange } from '../../utils/colors'

export const Styles = StyleSheet.create({
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
  },

  textInput:{
    width: 200,
    height: 40,
    paddingLeft: 6,
    borderColor: orange,
    borderWidth: 2,
    borderRadius:5,
  },

  imgIcon:{
    width: 30,
    height: 30
  }

})