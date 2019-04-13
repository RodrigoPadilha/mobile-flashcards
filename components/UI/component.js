import React from 'react';
import { Text, TouchableHighlight, TextInput,TouchableOpacity, Image } from 'react-native';
import { Styles } from './style';
import { purple, orange } from '../../utils/colors'

/**
 * 
 * @param {*} props 
 */
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

/**
 * 
 * @param {*} props 
 */
export const BtnImage = (props) => {
    return(
        <TouchableOpacity 
            onPress={() => props.onPress()}>            
            <Image                
                style={Styles.imgIcon}
                source={props.srcImage}/>
        </TouchableOpacity>
    );
}

/**
 * 
 * @param {*} props 
 */
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