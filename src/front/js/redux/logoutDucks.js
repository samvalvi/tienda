//Constantes
const initialData = {
    user: {}
}

//Types
const LOGOUT_USER = 'LOGOUT_USER'

//Reducer
export default function logoutUserRedux (state = initialData, action) {
    switch (action.type) {
        case 'LOGOUT_USER':
            return {...state, user: null}
        default:
            return state
    }
}

//Action Creator
export const logoutUserAction = () => (dispatch, getState) => {
        localStorage.removeItem('data')
        dispatch({
            type: LOGOUT_USER
        })
}