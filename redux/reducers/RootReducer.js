import { combineReducers } from 'redux'
import { deckReducer } from './DeckReducer'

export const rootReducer = combineReducers({
    storeDecks: deckReducer,    
  });