import axios from 'axios';

//Constantes
const initialData = {
    products: [],
    error: ""
}

//Types
const ERROR = "ERROR"
const GET_PRODUCTS = 'GET_PRODUCTS'

//Reducers
export default function productReducer(state = initialData, action){
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {...state, products: action.payload}
        case 'ERROR':
            return {...state, error: action.payload}
        default:
            return state
    }
}

//Actions
export const getProductsAction = () => async (dispatch, getState) => {
    try{
        const resp = await axios.get(process.env.REACT_APP_API_URL + '/api/productos');
        dispatch({
            type: GET_PRODUCTS,
            payload: resp.data
        })
    }catch(error){
        dispatch({
            type: ERROR,
            payload: error
        })
    }
}