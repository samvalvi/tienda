//Constantes
const initialData = {
    user: {},
    auth: false,
    error: null
}

//Types
const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL'
const USER_ACTIVE = 'USER_ACTIVE'
const LOGIN_UNSUCCESSFUL = 'LOGIN_UNSUCCESSFUL'
const ERROR = 'ERROR'

//Reducer
export default function userLoginReducer(state = initialData, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESSFUL':
            return {...state, user: action.payload, auth: true}
        case 'LOGIN_UNSUCCESSFUL':
            return {...state, user: action.payload, auth: false}
        case 'USER_ACTIVE':
            return {...state, user: action.payload, auth: true}
        case 'ERROR':
            return {...state, auth: false, error: true}
        default:
            return state
    }
}

//Actions
export const userLoginAction = (username, password) => async (dispatch, getState) => {
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
                if(data.access_token){    
                    dispatch({ type: LOGIN_SUCCESSFUL, payload: data})
                }else{
                    dispatch({ type: LOGIN_UNSUCCESSFUL, payload: data})   
                }
        })
        .catch(error => dispatch({ type: ERROR}))  
}

export const userActiveAction = () => async (dispatch, getState) => {
    let data = JSON.parse(localStorage.getItem('data'))
    if(data){
        dispatch({ type: USER_ACTIVE, payload: data})
    }
}
