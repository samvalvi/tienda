//Constantes
const initialData = {
    homeProduct: [],
    error: null
}

//Types
const GET_HOME_PRODUCT = 'GET_HOME_PRODUCT';
const ERROR = 'ERROR';

//Reducer
export default function homeProductReducer(state = initialData, action) {
    switch (action.type) {
        case 'GET_HOME_PRODUCT':
            return {...state, homeProduct: action.payload}
        case 'ERROR':
            return {...state, error: true}
        default:
            return state
    }
}

//Actions
export const getHomeProductAction = () => async (dispatch, getState) => { 
        await fetch(process.env.REACT_APP_API_URL + '/api/productos', {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(response => response.json())
        .then(
            data => dispatch({
                type: GET_HOME_PRODUCT,
                payload: data.filter(item => item.home_img)
            })
        )
        .catch(error => dispatch({ type: ERROR}))
}