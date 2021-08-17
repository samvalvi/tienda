//Constantes
const initialData = {
    cart: [],
    total: 0,
    quantity: 0
}

//Types
const ADD_ITEM = 'ADD_ITEM'
const CART_ACTIVE = 'CART_ACTIVE'
const REMOVE_ONE = 'REMOVE_ONE'
const TOTAL_ITEMS = 'TOTAL_ITEMS'
const TOTAL_QUATITY = 'TOTAL_QUANTITY'
const ERROR = 'ERROR'

//Reducer
export default function cartReducer (state = initialData, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            let item = state.cart.find(item => item.id === action.payload.id)
            if(!item) return {...state, cart: [...state.cart, action.payload]}
            else return {...state, quantiy: state.quantity + 1, total: state.total * state.quantity}
        case 'TOTAL_ITEMS':
            return {...state, total: action.payload}
        case 'TOTAL_QUANTITY':
            return {...state, quantity: action.payload}
        case 'REMOVE_ONE':
            return {...state, cart: state.cart.filter(item => item.id !== action.payload)}
        case 'CART_ACTIVE':
            return {...state}
        case 'ERROR':
            return {...state}
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

export const totalItemsAction = () => async(dispatch, getState) => {

}

export const removeItemAction = (product_id) => async(dispatch, getState) => {
    try{
        dispatch({
            type: REMOVE_ONE,
            payload: product_id
        })
    }catch(error) {
        dispatch({type: ERROR})
    }
}