//Constantes
const initialData = {
    cart: []
}

//Types
const ADD_ITEM = 'ADD_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const ERROR = 'ERROR'
const CLEAN_BAG = 'CLEAN_BAG'

//Reducer
export default function cartReducer (state = initialData, action) {
    switch (action.type) {
        case 'ADD_ITEM':
           return{...state, cart: action.payload}
        case 'DELETE_ITEM':
            return{...state, cart: action.payload}
        case 'CLEAN_BAG':
            return{...state}
        case 'ERROR':
            return{...state}
        default:
            return state
    }
}

//Action Creators
export const addItemAction = (product_id) => async(dispatch, getState) => {
    await fetch(process.env.REACT_APP_API_URL + 'api/producto', {
        method: "POST",
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*"
        },
        body: JSON.stringify({
            id:product_id
        })
    })
    .then(response => response.json())
    .then(data =>
        dispatch({
            type: ADD_ITEM,
            payload: data.producto
        })
    )
    .catch(error => {
        dispatch({type: ERROR})
    })
}

export const deleteItemAction = () => (dispatch, getState) => {

}

export const cleanBagAction = () => (dispatch, getState) => {

}