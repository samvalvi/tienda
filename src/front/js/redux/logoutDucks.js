//Constantes
const initialData = {
    user: {},
    error: null
}

//Types
const LOGOUT_USER = 'LOGOUT_USER'
const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE'

//Reducer
export default function logoutUserRedux (state = initialData, action) {
    switch (action.type) {
        case 'LOGOUT_USER':
            return {...state, user: null}
        case 'LOGOUT_USER_FAILURE':
            return {...state, error: true}
        default:
            return state
    }
}

//Action Creator
export const logoutUserAction = () => async(dispatch, getState) => {
        try{
            await fetch(`${process.env.REACT_APP_API_URL}/logout`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${refresh_token}`,
                    "Access-Control-Allow-Origin":"*"
                }
            })
            .then(response => response.json())
            .then(data => {
                if(data.status === 200){
                    dispatch({type: LOGOUT_USER})
                    localStorage.removeItem('data')
                }
            })
        }catch(error) {
            dispatch({
                type: LOGOUT_USER_FAILURE,
            })
        }
}