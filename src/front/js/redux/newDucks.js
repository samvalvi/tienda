import axios from 'axios';

//Constantes
const initialData = {
    newProducts: [],
    error: ""
}

//Types
const GET_NEW_PRODUCTS = 'GET_NEW_PRODUCTS'
const ERROR = 'ERROR'

//Reducer
export default function newProductReducer(state = initialData, action) {
    switch (action.type) {
        case 'GET_NEW_PRODUCTS':
            return {...state, newProducts: action.payload}
        case 'ERROR':
            return {...state, error: action.payload}
        default:
            return state
    }
}

//Actions
export const getNewProductsAction = () => async (dispatch, getState) => {
    try{
        const resp = await axios.get(process.env.REACT_APP_API_URL + '/api/productos')
        const products = resp.data.filter(product => product.nuevo)

        dispatch({
            type: GET_NEW_PRODUCTS,
            payload: products
        })

    }catch(error){
        dispatch({
            type: ERROR, 
            payload: error.message
        })
    }
}