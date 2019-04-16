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
    return AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify({
        cardList
    }))
}

export function removeCardsOfDeck(deckKey){
        return AsyncStorage.getItem(CARD_STORAGE_KEY).then( results => {
            const data = JSON.parse(results);
            const newData = data.filter(card => card.parent !== deckKey);
            AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(newData));
            return newData;
     });
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
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))        
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

export function removeDeckAPI(deckKey){
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {            
            const data = JSON.parse(results) 
            const newData = data.filter(deck => deck.key !== deckKey)                  
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(newData))   
            return newData           
        })    
}