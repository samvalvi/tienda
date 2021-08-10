import axios from 'axios'

//Constantes
const initialData = {
    shopProducts: [],
    error: ""
}

//Types
const GET_SHOP_PRODUCTS = 'GET_SHOP_PRODUCTS'
const ERROR = 'ERROR'

//Reducer
export default function shopProductsReducer (state = initialData, action) {
    switch (action.type) {
        case 'GET_SHOP_PRODUCTS':
            return {...state, shopProducts: action.payload}
        case 'ERROR':
            return {...state, error: action.payload}
        default:
            return state
    }
}

//Actions
export const getShopProductsAction = () => async (dispatch, getState) => {
    try{
        const resp = await axios.get('http://localhost:5000/api/productos')
        dispatch({
            type: GET_SHOP_PRODUCTS, 
            payload: resp.data
        })
    }
    catch(error){
        dispatch({
            type: ERROR, 
            payload: error.message
        })
    }
}