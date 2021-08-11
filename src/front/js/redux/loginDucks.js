//Constantes
const initialData = {
    user: {},
    logged: false
}

//Types
const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL'
const ERROR = 'ERROR'

//Reducer
export default function userLoginReducer(state = initialData, action) {
    switch (action.type) {
        case LOGIN_SUCCESSFUL:
            return {...state, user: action.payload, logged: true}
        case ERROR:
            return {...state}
        default:
            return state
    }
}


//Actions
export const userLoginAction = (username, password) => async (dispatch, getState) => {
    try{
        await fetch(process.env.REACT_APP_API_URL + 'api/acceso', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":"*"
            },
            body: JSON.stringify({
                correo: username,
                clave: password
            })
        })  
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: LOGIN_SUCCESSFUL,
                payload: data
            })
        })
    }catch(error){
        dispatch({
            type: ERROR
        })
    }
}