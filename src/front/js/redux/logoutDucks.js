//Constantes
const initialData = {
    user: {}
}

//Types
const LOGOUT_USER = 'LOGOUT_USER'
const ERROR = 'ERROR'

//Reducer
export default function logoutUserRedux (state = initialData, action) {
    switch (action.type) {
        case 'LOGOUT_USER':
            return {...state, user: action.payload}
        case 'ERROR':
            return {...state}
        default:
            return state
    }
}

//Action Creator
export const logoutUserAction = () => (dispatch, getState) => {
    try{
        dispatch({
            type: LOGOUT_USER, 
            payload: {}
        })
    }catch(error){
        dispatch({
            type: ERROR
        })
    }
}