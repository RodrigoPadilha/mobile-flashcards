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
            if(action.cards){
                return {
                    cardList: action.cards,
                    loading: false,    
                    //cardList: action.cards
                }
            } else {
                return {
                    ...state,
                    cardList: action.cards
                }
            }

        case REMOVE_CARD:
            return {}

        case ADD_CARD:
            return {}

        default:
            return state
    }

}
