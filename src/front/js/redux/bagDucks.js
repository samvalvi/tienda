//Constantes
const initialData = {
    cart: [],
    quantity: 0,
    price: 0,
    error: null
}

//Types
const ADD_ITEM = 'ADD_ITEM'
const INCREASE_ITEM = 'INCREASE_ITEM'
const DECREASE_ITEM = 'DECREASE_ITEM'
const REMOVE_ONE = 'REMOVE_ONE'
const TOTAL_ITEMS = 'TOTAL_ITEMS'
const GET_PRICE = 'GET_PRICE'
const ERROR = 'ERROR'

//Reducer
export default function cartReducer (state = initialData, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            let i = state.cart.find(i => i.id === action.payload.id)
            if(!i) return {...state, cart: [...state.cart, {...action.payload, quantity: 1}]}
            break;
        case 'INCREASE_ITEM':
            let j = state.cart.find(item => item.id === action.payload)
            if(j) return {...state, cart: state.cart.map((item) => item.id === action.payload ? {...item, quantity: j.quantity + 1} : item)}
            break;
        case 'DECREASE_ITEM':
            let k = state.cart.find(item => item.id === action.payload)
            if(k) return {...state, cart: state.cart.map(item => item.id === action.payload ? {...item, quantity: (k.quantity -1) > 0 ? k.quantity - 1 : 0 } : item)}
            break;
        case 'REMOVE_ONE':
            return {...state, cart: state.cart.filter(i => i.id !== action.payload)}
        case 'TOTAL_ITEMS':
            return {...state, quantity: state.cart.reduce((acc, item) => acc + item.quantity, 0)}
        case 'GET_PRICE':
            return {...state, price: state.cart.reduce((acc, item) => acc + (item.quantity * item.precio), 0)}
        case 'ERROR':
            return {...state, error: true}
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

export const increaseItemAction = (product_id) => async(dispatch, getState) => {
    try{
        dispatch({
            type: INCREASE_ITEM,
            payload: product_id
        })

        dispatch({
            type: TOTAL_ITEMS
        })

        dispatch({
            type: GET_PRICE
        })

    }catch(error) {
        dispatch({type: ERROR})
    }
}

export const decreaseItemAction = (product_id) => async(dispatch, getState) => {
    try{
        dispatch({
            type: DECREASE_ITEM,
            payload: product_id
        })

        dispatch({
            type: TOTAL_ITEMS
        })

        dispatch({
            type: GET_PRICE
        })

    }catch(error) {
        dispatch({type: ERROR})
    }
}

export const removeItemAction = (product_id) => async(dispatch, getState) => {
    try{
        dispatch({
            type: REMOVE_ONE,
            payload: product_id
        })

        dispatch({
            type: TOTAL_ITEMS
        })

    }catch(error) {
        dispatch({type: ERROR})
    }
}

export const totalItemAction = () => async(dispatch, getState) => {
    try{
        dispatch({
            type: TOTAL_ITEMS
        })
    }catch(error) {
        dispatch({type: ERROR})
    }
}

export const getPriceAction = () => async(dispatch, getState) => {
    try{
        dispatch({
            type: GET_PRICE
        })
    }catch(error) {
        dispatch({type: ERROR})
    }
}