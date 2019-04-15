import { 
    LOAD_CARDS,
    REMOVE_CARD, 
    ADD_CARD 
} from '../actions/CardAction'

const initialPostState = {
    cardList:[],       
    loading: true, 
 }

export const cardReducer = (state = initialPostState, action) => {
    switch(action.type){        
        case LOAD_CARDS:
            if(action.cards){   // Se cards foi criado muda o estado de loading
                return {
                    cardList: action.cards,
                    loading: false,    
                }
            }
            return {
                ...state,
                cardList: action.cards
            }

        case REMOVE_CARD:
            return {}

        case ADD_CARD:
            return {}

        default:
            return state
    }

}
