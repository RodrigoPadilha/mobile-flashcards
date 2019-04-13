import { combineReducers } from 'redux'
import { deckReducer } from './DeckReducer'
import { cardReducer } from './CardReducer'

export const rootReducer = combineReducers({
    storeDecks: deckReducer,    
    storeCard: cardReducer,
  });