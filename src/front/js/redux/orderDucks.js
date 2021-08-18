//Constantes
const initialData = {
    order: {}
}
//Types
const ORDER_CREATED = 'ORDER_CREATED'
const ORDER_UPDATED = 'ORDER_UPDATED'
const ORDER_DELETED = 'ORDER_DELETED'
const ORDER_PROCESSED = 'ORDER_PROCESSED'

//Reducer
export default function reducer(state = initialData, action) {
    switch (action.type) {
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