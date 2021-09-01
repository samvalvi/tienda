//Constantes
const initialData = {
    order: {},
    user: {},
    error: null
}
//Types
const GET_USER = 'GET_USER'
const ORDER_CREATED = 'ORDER_CREATED'
const ORDER_UPDATED = 'ORDER_UPDATED'
const ORDER_DELETED = 'ORDER_DELETED'
const ORDER_PROCESSED = 'ORDER_PROCESSED'

//Reducer
export default function orderReducer(state = initialData, action) {
    switch (action.type) {
        case 'GET_USER':
            return { ...state, user: action.payload }
        case 'ORDER_CREATED':
            return {...state, order: action.payload}
        case 'ORDER_UPDATED':
            return {...state, order: action.payload}
        case 'ORDER_DELETED':
            return {...state, order: null}
        case 'ORDER_PROCESSED':
            return {...state, order: null}
        default:
            return state
    }
}

//Actions
export const createOrderAction = (order, user) => (dispatch, getState) => {
    dispatch({
        type: GET_USER,
        payload: user
    })
    dispatch({
        type: ORDER_CREATED,
        payload: order
    })
}