import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { Styles } from './style';

export const Button = (props) => {
    console.log(props)
    return (
        <TouchableHighlight
            style={Styles.btn}
            onPress={() => props.onPress}
            underlayColor='#e65100'>
            <Text style={Styles.btnText}>{props.label}</Text>
        </TouchableHighlight>
    );
}