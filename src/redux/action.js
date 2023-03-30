const ADD_FAV = "ADD_FAV"
const REMOVE_FAV = "REMOVE_FAV"

export function addFav(personaje){
    return {type:ADD_FAV, payload: personaje }
}

export function removeFav(id){
    return {type:REMOVE_FAV, payload: id }
}

export {
    ADD_FAV,
    REMOVE_FAV
}