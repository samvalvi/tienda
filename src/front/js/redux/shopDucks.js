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
    await fetch(process.env.REACT_APP_API_URL + '/api/productos', {
        method: "GET",
        mode: "cors",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*"
        }
    })
    .then(response => response.json())
    .then(data => dispatch({type: GET_SHOP_PRODUCTS, payload: data}))
    .catch(error => dispatch({type: ERROR}))
}