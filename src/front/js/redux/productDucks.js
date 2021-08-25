//Constantes
const initialData = {
    products: [],
    error: null
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
            return {...state, error: true}
        default:
            return state
    }
}

//Actions
export const getProductsAction = () => async (dispatch, getState) => {
    await fetch(process.env.REACT_APP_API_URL + '/api/productos', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
    })
    .then(response => response.json())
    .then(data => dispatch({
        type: GET_PRODUCTS,
        payload: data
    }))
    .catch(error => dispatch({
        type: ERROR
    }))
}