import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'App:decks'
const CARD_STORAGE_KEY = 'App:cards'

/***********\
    CARD
\***********/
export function submitCard( card ){
    AsyncStorage.getItem(CARD_STORAGE_KEY).then((results) => {    
        var data = JSON.parse(results)                        
        if(data !== null){            
            data.push(card)                
        } else {
            data = []
            data.push(card)              
        }
        AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(
            data
        ))        
    })               
}

export function getCardList(deckKey){
    return AsyncStorage.getItem(CARD_STORAGE_KEY)
        .then((results) => {            
            var data = JSON.parse(results)            
            if(!data)
                return []                 
            return data.filter(card => card.parent === deckKey)
        })    
}


export function submitCardList( cardList ){    
    console.log('SubmitCardList:', cardList)
    return AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify({
        cardList
    }))
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


/***********\
    DECK
\***********/
export function submitDeck( deck ){
    AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {    
        var data = JSON.parse(results)                        
        if(data !== null){            
            data.push(deck)                
        } else {
            data = []
            data.push(deck)              
        }
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(
            data
        ))        
    })               
}

export function getDeckList(){
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {            
            var data = JSON.parse(results)            
            if(!data)
                return []                 
            return data
        })    
}