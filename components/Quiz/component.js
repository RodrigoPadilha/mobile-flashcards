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
        /*
        this.props.listOfCards().then( () => { 
            this.setState({ loading: false }) 
        })
        */
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
        const { cardList, loading } = this.props
        console.log(cardList)
        if( loading === true) {         
            return <Text>Loading</Text>
        }
                
        return(               
            //console.log(cardList[0].question)
            <View style={Styles.container}>                
                <Text>{this.state.numberQuest}</Text>
                <Text>{cardList[this.state.numberQuest-1].question}</Text>
                <BtnDefault label='CORRETO' onPress={this.result('HIT')}/>
                <BtnDefault label='ERRADO'  onPress={this.result('ERRADO')}/>
            </View>
        );        
    }   
}

const mapStateToProps = (state,props) => ({
    cardList: state.storeCards.cardList,
    loading: state.storeCards.loading,
});

const mapDispatchToProps = (dispatch) => ({     
    listOfCards: () => dispatch(loadCardsFromStorage()),   
})

export default connect(mapStateToProps,mapDispatchToProps)(Quiz);