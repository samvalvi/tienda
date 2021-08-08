import axios from 'axios';

//Constantes
const initialData = {
    products: []
}

//Types
const ERROR = "ERROR"
const GET_PRODUCTS = 'GET_PRODUCTS'

//Reducers
export default function productReducer(state = initialData, action) {
    switch (action.type) {
        case 'GET_PRODUCTS'

            
    }
}

//Actions
export const getProductsAction = () => async (dispatch, getState) => {
    try{
        const resp = await axios.get('http://localhost:3000/api/productos');
        dispatch({
            type: GET_PRODUCTS,
        })
    }catch(error){
    }
}