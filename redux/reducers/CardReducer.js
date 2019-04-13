import { 
    LOAD_CARDS,
    REMOVE_CARD, 
    ADD_CARD 
} from '../actions/CardAction'

const initialPostState = {
    cardList:[],        
 }

export const cardReducer = (state = initialPostState, action) => {

    switch(action.type){
        case LOAD_CARDS:
            return {}

        case REMOVE_CARD:
            return {}

        case ADD_CARD:
            return {}

        default:
            return state
    }

}
