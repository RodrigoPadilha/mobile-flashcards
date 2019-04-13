import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import { loadCardsFromStorage } from '../../redux/actions/CardAction'

import { Styles } from './style';
import { BtnDefault } from '../UI/component';

class Quiz extends React.Component {

    state ={
        numberQuest: 1
    }
    
    componentDidMount(){
        this.props.listOfCards();
    }

    result = (value) => {
        return () => {            
            console.log(value)
            this.setState(prevState => ({
                numberQuest: prevState.numberQuest + 1
            })); 
        }
    }
    

    render(){
        const { cardList } = this.props
        console.log(cardList[0])
        let aux = cardList[0]
        console.log(aux.key)
        return(
            <View style={Styles.container}>
                <Text>???</Text>
                <Text>{this.state.numberQuest}</Text>
                <BtnDefault label='CORRETO' onPress={this.result('HIT')}/>
                <BtnDefault label='ERRADO'  onPress={this.result('ERRADO')}/>
            </View>
        );
    }
}

const mapStateToProps = (state,props) => ({
    cardList: state.storeCards.cardList,
});

const mapDispatchToProps = (dispatch) => ({     
    listOfCards: () => dispatch(loadCardsFromStorage()),   
    //deleteDeck: (deckKey) => dispatch(deleteDeckFromStorage(deckKey))       
  })

export default connect(mapStateToProps,mapDispatchToProps)(Quiz);
//export default Quiz