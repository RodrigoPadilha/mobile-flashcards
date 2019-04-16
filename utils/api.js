import { AsyncStorage } from 'react-native'

const CARD_STORAGE_KEY = 'App:cards'

export function getCardList(){
    return AsyncStorage.getItem(CARD_STORAGE_KEY)
        .then((results) => {            
            const data = JSON.parse(results)
            console.log(data)
            data.map((item)=> console.log(item))
            
        })    
}

export function submitCardList( cardList ){    
    console.log('SubmitCardList:', cardList)
    return AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify({
        cardList
    }))
}


export function submitCard( card ){
    AsyncStorage.getItem(CARD_STORAGE_KEY)
        .then((results) => {                         
            const data = JSON.parse(results)                        
            if(data !== null){
                console.log('Entrou')
                //data.push(card)
                console.log(data)
                /*data.push(card)
                AsyncStorage.setItem(CARD_STORAGE_KEY, Json.stringify({
                    data
                }))
                */
            } else {
                data = []
                AsyncStorage.setItem(CARD_STORAGE_KEY, Json.stringify(
                    data
                ))
            }
            
        })               
    /*return AsyncStorage.mergeItem(CARD_STORAGE_KEY, JSON.stringify({
        card
    }))
    */
}




export function removeCard(){

}

export function removeCardList(key){
    return AsyncStorage.getItem(CARD_STORAGE_KEY)
        .then((results) => {            
            const data = JSON.parse(results)
            console.log('RemoveCardList:', data)
            //data[key] = undefined
            //delete data[key]
            //AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(data))
        })

}


//import { CARD_STORAGE_KEY } from '../???'
//export const CARD_STORAGE_KEY = 'App:cards'