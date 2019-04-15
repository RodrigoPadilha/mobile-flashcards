import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import { loadCardsFromStorage } from '../../redux/actions/CardAction'

import { Styles } from './style';
import { BtnDefault } from '../UI/component';

class Quiz extends React.Component {

    state ={
        numberQuest: 0
    }
    
    componentDidMount(){
        this.props.listOfCards();
    }

    result = (value) => {
        return () => {            
            this.setState(prevState => ({
                numberQuest: prevState.numberQuest < this.props.cardList.length ? prevState.numberQuest + 1 : prevState.numberQuest
            })); 
        }
    }
  
    render(){        
        const { cardList, loading } = this.props
        const { numberQuest } = this.state

        if( loading === true) {         
            return <Text>Loading</Text>
        }                
        return(               
            <View style={Styles.container}>                
                <Text>{numberQuest+1}</Text>
                <Text>{numberQuest < cardList.length ? cardList[numberQuest].question : 'Fim'}</Text>
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