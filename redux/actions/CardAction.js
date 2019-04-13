export const LOAD_CARDS = 'LOAD_CARDS'
export const REMOVE_CARD = 'REMOVE_CARD'
export const ADD_CARD = 'ADD_CARD'

export const loadCardsFromStorage = () => {
    return (dispatch, getState) => {
        dispatch(loadCardList())
/*
Buscar da LocalStorage        
       ServerAPI
        .getAllPosts()
        .then(posts => {
            dispatch(loadPosts(posts));
        });
*/
    }
}
