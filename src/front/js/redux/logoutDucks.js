//Constantes
const initialData = {
    user: {},
    error: null
}

//Types
const LOGOUT_USER = 'LOGOUT_USER'

//Reducer
export default function logoutUserRedux (state = initialData, action) {
    switch (action.type) {
        case 'LOGOUT_USER':
            return {...state, user: null}
        case 'ERROR':
            return {...state, error: true}
        default:
            return state
    }
}

//Action Creator
export const logoutUserAction = () => (dispatch, getState) => {
        try{
            localStorage.removeItem('data')
            dispatch({
                type: LOGOUT_USER
            })

        }catch(error) {
            dispatch({
                type: 'ERROR'
            })
        }
}