import axios from 'axios';

//Constantes
const initialData = {
    homeProduct: '',
    error: ''
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
            return {...state, error: action.payload}
        default:
            return state
    }
}

//Actions
export const getHomeProductAction = () => async (dispatch, getState) => {
    try{
        const resp = await axios.get(process.env.REACT_APP_API_URL + '/api/productos');
        const home__img = resp.data.filter(product => product.id === 3);

        dispatch({
            type: GET_HOME_PRODUCT, 
            payload: home__img
        })
    }catch(error) {
        dispatch({
            type: ERROR,
            payload: error
        })
    }
}