import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import { loadCardsFromStorage } from '../../redux/actions/CardAction'

import { Styles } from './style';
import { BtnDefault } from '../UI/component';

class Quiz extends React.Component {

    static navigationOptions = {
        title: 'Quiz',
    };

    state ={
        numberQuest: 0,
        turnCard: false,
        anwserCorrect:0,
    }
    
    componentDidMount(){
        this.showAnswer(false)        
        const deckKey = this.props.navigation.getParam('deckKey')
        this.props.listOfCards(deckKey);
    }

    result = (value) => {
        return () => {            
            this.setState(prevState => ({
                numberQuest: prevState.numberQuest < this.props.cardList.length ? prevState.numberQuest + 1 : prevState.numberQuest,
                turnCard: false,
                anwserCorrect: value === 'HIT' ? prevState.anwserCorrect + 1 : prevState.anwserCorrect,
            })); 
        }
    }

    showAnswer = (status) => {
        return () => {
            this.setState({turnCard:status})
        }
    }
  
    score = (qtdQuestions) => (this.state.anwserCorrect * 100) / qtdQuestions

    restartQuiz = () => {
        const deckKey = this.props.navigation.getParam('deckKey')
        
        this.setState({
            numberQuest: 0,
            turnCard: false,
            anwserCorrect:0,
        })
    }

    back = () => {
        const deckKey = this.props.navigation.getParam('deckKey')
        this.props.navigation.navigate(
            'DeckDetail',
            {deckKey:deckKey}
        )
    }
    
    render(){        
        const { cardList, loading } = this.props
        const { numberQuest, turnCard } = this.state  
        const endTest = numberQuest >= cardList.length      

        if( loading === true) {         
            return <Text>Loading</Text>
        }

        if(endTest){
            return  (
                <View style={Styles.container}>
                    <Text>FIM</Text>
                    <Text>Você acertou {this.score(cardList.length).toFixed(2)}%</Text>
                    <View style={Styles.btnComands}>
                            <View style={Styles.btnRestart}><BtnDefault label='Reiniciar' onPress={this.restartQuiz}/></View>
                            <View style={Styles.btnBack}><BtnDefault label='Voltar'  onPress={this.back}/></View>          
                        </View>
                </View>
            )            
        }

        return(               
            <View style={Styles.container}>                
                <Text>Questão {numberQuest+1} de {cardList.length}</Text>
                <Text>{numberQuest < cardList.length ? cardList[numberQuest].question : 'Fim'}</Text>                

                { turnCard && 
                    <View style={Styles.txtAnswer}>
                        <Text>Resposta: {cardList[numberQuest].answer}</Text>
                        <View style={Styles.btnComands}>
                            <View style={Styles.btnCorrect}><BtnDefault label='CORRETO' onPress={this.result('HIT')}/></View>
                            <View style={Styles.btnWrong}><BtnDefault label='ERRADO'  onPress={this.result('ERRADO')}/></View>          
                        </View>
                    </View>
                    || 
                    <View style={Styles.btnComands}>
                        <BtnDefault label='Exibir resposta (Answer)' onPress={this.showAnswer(true)}/>
                    </View>
                }                
            </View>
        );        
    }   
}

const mapStateToProps = (state,props) => ({
    cardList: state.storeCards.cardList,
    loading: state.storeCards.loading,
});

const mapDispatchToProps = (dispatch) => ({     
    listOfCards: (deckKey) => dispatch(loadCardsFromStorage(deckKey)),   
})

export default connect(mapStateToProps,mapDispatchToProps)(Quiz);