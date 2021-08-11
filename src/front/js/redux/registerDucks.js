import axios from 'axios';

//Constantes
const initialData = {
    registration: [],
    error: ''
}

//Types
const POST_USER_REGISTER = 'POST_USER_REGISTER';
const ERROR = 'ERROR';

//Reducer
export default function registerUserReducer(state=initialData, action){
    switch(action.type){
        case 'POST_USER_REGISTER':
            return {...state, registration: action.payload}
        case 'ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

//Actions
export const postUserRegisterAction = (registerPrimerNombre, registerPrimerApellido, provincia, registerEmail, registerClave, repetir_Clave) => async (dispatch, getState) => {
    try{
       const resp = await axios.post(process.env.REACT_APP_API_URL + 'api/registrar',  JSON.stringify({
           primer_nombre: registerPrimerNombre,
           primer_apellido: registerPrimerApellido,
           provincia: provincia,
           correo: registerEmail,
           clave: registerClave,
           repetir_clave: repetir_Clave
       }), {headers: {'Content-Type': 'application/json'}})
        console.log(resp.data)
        dispatch({type: POST_USER_REGISTER, payload: resp.data})

    }catch(error){
        dispatch({type: ERROR, payload: error.message})
    }
}