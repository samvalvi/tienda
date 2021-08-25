//Constantes
const initialData = {
    quantity: 0,
    loading: false,
    error: null,
}

//Types
const LOADING_BADGE = 'LOADING_BADGE'
const BADGE_QUANTITY_SUCCESS = 'BADGE_QUANTITY_SUCCESS'
const INCREMENT_BADGE = 'INCREMENT_BADGE'
const DECREMENT_BADGE = 'DECREMENT_BADGE'
const ERROR_BADGE = 'ERROR_BADGE'


//Reducer
export default function badgeReducer(state = initialData, action) {
    switch (action.type) {
        case 'LOADING_BADGE':
            return {
                ...state,
                loading: true,
            }
        case 'BADGE_QUANTITY_SUCCESS':
            return {
                ...state,
                loading: false
            }
        case 'INCREMENT_BADGE':
            return {
                ...state,
                loading: false,
                quantity: state.quantity + 1
            }
        case 'DECREMENT_BADGE':
            return {
                ...state,
                loading: false,
                quantity: state.quantity - 1
            }
        case 'ERROR_BADGE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

//Action Creators
export const loadingBadgeAction = () => async(dispatch, getState) => {
    dispatch({
        type: LOADING_BADGE
    })
}

export const badgeQuantitySuccessAction = () => async(dispatch, getState) => {
    try{
        dispatch(loadingBadgeAction());
        
        dispatch({
            type: BADGE_QUANTITY_SUCCESS
        })
    }catch(error){
        dispatch({
            type: ERROR_BADGE,
            payload: true
        })
    }
}

export const incrementBadgeAction = () => async(dispatch, getState) => {
    try{
        dispatch({
            type: INCREMENT_BADGE
        })
    }catch(error){
        dispatch({
            type: ERROR_BADGE,
            payload: true
        })
    }
}

export const decrementBadgeAction = () => async(dispatch, getState) => {
    try{
        dispatch({
            type: DECREMENT_BADGE
        })
    }catch(error){
        dispatch({
            type: ERROR_BADGE,
            payload: true
        })
    }
}
