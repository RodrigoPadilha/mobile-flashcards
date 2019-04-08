import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Styles } from './style';

class Quiz extends React.Component {
    render(){
        return(
            <View style={Styles.container}>
                <Text>Quiz</Text>
            </View>
        );
    }
}

export default Quiz