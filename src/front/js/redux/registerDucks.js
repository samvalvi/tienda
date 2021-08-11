//Constantes
const initialData = {
    status: '',
}

//Types
const POST_USER_REGISTER = 'POST_USER_REGISTER';
const ERROR = 'ERROR';

//Reducer
export default function registerUserReducer(state=initialData, action){
    switch(action.type){
        case 'POST_USER_REGISTER':
            return {...state, status: action.payload}
        case 'ERROR':
            return {...state}
        default:
            return state
    }
}

//Actions
export const postUserRegisterAction = (registerPrimerNombre, registerPrimerApellido, provincia, registerEmail, registerClave, repetir_Clave) => async (dispatch, getState) => {
    
        await fetch(process.env.REACT_APP_API_URL + "api/registro", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin":"*"
            },
            body: JSON.stringify({
                primer_nombre: registerPrimerNombre,
                primer_apellido: registerPrimerApellido,
                provincia: provincia,
                correo: registerEmail,
                clave: registerClave,
                repetir_clave: repetir_Clave
            }) 
          })
          .then(response => response.json())
          .then(data => {
              dispatch({
                  type: POST_USER_REGISTER,
                  payload: data
              })
          }).catch(error => {
              dispatch({
                  type: ERROR
              })
          })
}