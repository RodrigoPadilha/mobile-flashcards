import React from 'react';
import { Text, TouchableHighlight, TextInput,TouchableOpacity, Image, Alert } from 'react-native';
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
            placeholder={props.hint}
            selectionColor={purple}
            style={Styles.textInput}
            onChangeText={props.onChangeText}>     
        </TextInput>
    );
}

export const HintDialog = (props) => {
    
        Alert.alert(
            props.title,
            props.text,
            [
              //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
             
              /*
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
                */
                {text: 'OK', onPress: () => {
                        if(props.onPressOK)
                            props.onPressOK()
                    }
                },
            ],
            {cancelable: false},
          )
    
}