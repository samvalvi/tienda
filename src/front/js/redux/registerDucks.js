import axios from 'axios';

//Constantes
const initialData = {
    primer_nombre: '',
    primer_apellido: '',
    provincia: '',
    correo: '',
    clave: '',
    repetir_clave: '',
    succes: '',
    error: ''
}

//Types
const POST_USER_REGISTER = 'POST_USER_REGISTER';
const SUCCES = 'SUCCES';
const ERROR = 'ERROR';

//Reducer
export default function registerUserReducer(state=initialData, action){
    switch(action.type){
        case 'POST_USER_REGISTER':
            return {...state, }
        case 'SUCCES':
            return {...state, succes: action.data}
        case 'ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

//Actions
export const postUserRegisterAction = () => (dispatch, getState) => {

}