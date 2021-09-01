//Constantes
const initialData = {
    newProducts: [],
    error: null
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
            return {...state, error: true}
        default:
            return state
    }
}

//Actions
export const getNewProductsAction = () => async (dispatch, getState) => {
    await fetch (process.env.REACT_APP_API_URL + '/api/productos', {
        method: 'GET',
        mode: "cors",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Allow-Control-Origin": "*"
            }
    })
    .then(response => response.json())
    .then(
        data => dispatch({
            type: GET_NEW_PRODUCTS,
            payload: data.filter(product => product.nuevo)
        })
    )
    .catch(error =>
        dispatch({
            type: ERROR
        })
    )
}