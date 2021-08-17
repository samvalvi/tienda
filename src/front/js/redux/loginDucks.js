//Constantes
const initialData = {
    user: {}
}

//Types
const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL'
const USER_ACTIVE = 'USER_ACTIVE'
const LOGIN_UNSUCESSFUL = 'LOGIN_UNSUCESSFUL'
const ERROR = 'ERROR'

//Reducer
export default function userLoginReducer(state = initialData, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESSFUL':
            return {...state, user: action.payload}
        case 'LOGIN_UNSUCCESSFUL':
            return {...state, user: action.payload}
        case 'USER_ACTIVE':
            return {...state, user: action.payload}
        case 'ERROR':
            return {...state}
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
                    localStorage.setItem('data', JSON.stringify(data))
                }else{
                    dispatch({ type: LOGIN_UNSUCESSFUL, payload: data})   
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
