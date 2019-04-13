import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: '#ff00ff',
  },


  container: {
    flex: 1,
    backgroundColor: "#ff0000",
    paddingVertical: 50,
    position: "relative"
    },
  title: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10
  },
  loader: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  list: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: "row",
    backgroundColor: "#00ffee",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: -1
  },
  lightText: {
    color: "#f7f7f7",
    width: 200,
    paddingLeft: 15,
    fontSize: 12
    },
  line: {
    height: 2,
    width: "100%",
    backgroundColor:"rgba(255,255,255,0.5)"
  },
  icon: {
    position: "absolute",  
    bottom: 20,
    width: "100%", 
    left: 290, 
    zIndex: 1
  },
  numberBox: {
    position: "absolute",
    bottom: 75,
    width: 30,
    height: 30,
    borderRadius: 15,  
    left: 330,
    zIndex: 3,
    backgroundColor: "#e3e3e3",
    justifyContent: "center",
    alignItems: "center"
  },
  number: {fontSize: 14,color: "#000"},
  selected: {backgroundColor: "#FA7B5F"},

});