import React from 'react';
import { Text, TouchableHighlight, TextInput } from 'react-native';
import { Styles } from './style';
import { purple, orange } from '../../utils/colors'

export const BtnDefault = (props) => {
    return (
        <TouchableHighlight
            style={Styles.btn}
            onPress={() => props.onPress()}
            underlayColor={orange}>
            <Text style={Styles.btnText}>{props.label}</Text>
        </TouchableHighlight>
    );
}

export const TxtInput = (props) => {
    return(
        <TextInput
            placeHolder="Email"
            selectionColor={purple}
            style={Styles.textInput}
            onChangeText={props.onChangeText}>     
        </TextInput>
    );
}