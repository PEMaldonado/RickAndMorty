import {ADD_FAV, REMOVE_FAV} from "./action"


const initialState = {myFavorites: []}


const rootReducer = (state=initialState, {type, payload}) => {
    switch (type){
        case ADD_FAV:
            return { ...state, myFavorites: [...state.myFavorites, payload] };

        case REMOVE_FAV:
            const listaActualizada = state.myFavorites.filter((value) => value.id !==parseInt(payload))
            return {...state, myFavorites: listaActualizada}
        
        default:
            return {...state}
    }
}

export default rootReducer