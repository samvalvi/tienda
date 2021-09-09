import { useSelector } from "react-redux";

const refresh_token = useSelector(state => state.login.refresh_token);

//Constantes
const initialState = {
    user:{},
    load:false,
    error:false
}

//Types
const LOAD_USER = 'LOAD_USER';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
const UPDATE_PASWORD = 'UPDATE_PASWORD';
const UPDATE_PASWORD_SUCCESS = 'UPDATE_PASWORD_SUCCESS';
const UPDATE_PASWORD_FAILURE = 'UPDATE_PASWORD_FAILURE';
const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';
const DELETE_ACCOUNT_FAILURE = 'DELETE_ACCOUNT_FAILURE';

//Reducer
export default function profileReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'LOAD_USER':
            return { ...state, load:true };
        case 'LOAD_USER_SUCCESS':
            return { ...state, load:false, user:action.payload };
        case 'LOAD_USER_FAILURE':
            return { ...state, load:false, error:true };
        case 'UPDATE_USER':
            return { ...state, load:true };
        case 'UPDATE_USER_SUCCESS':
            return { ...state, load:false, user:action.payload };
        case 'UPDATE_USER_FAILURE':
            return { ...state, load:false, error:true };
        case 'UPDATE_PASWORD':
            return{...state, load:true};
        case 'UPDATE_PASWORD_SUCCESS':
            return{...state, load:false, user:action.payload};
        case 'UPDATE_PASWORD_FAILURE':
            return{...state, load:false, error:true};
        case 'DELETE_ACCOUNT':
            return{...state, load:true};
        case 'DELETE_ACCOUNT_SUCCESS':
            return{...state, load:false, user:action.payload};
        case 'DELETE_ACCOUNT_FAILURE':
            return{...state, load:false, error:true};
        default:
            return state;
    }
}

//Action Creators
export const loadUser = () => (dispatch, getState) => {
    return {
        type:LOAD_USER
    }
}

export const loadUserSuccess = (user) => (dispatch, getState) => {
    try{
        loadUser();

        dispatch({
            type:LOAD_USER_SUCCESS,
        })
    }catch(e){
        dispatch({ 
            type:LOAD_USER_FAILURE 
        });
    }
}

export const updateUser = () => (dispatch, getState) => {
    return {
        type:UPDATE_USER
    }
}

export const updateUserSuccess = (user) => (dispatch, getState) => {
    try{
        updateUser();

        dispatch({
            type:UPDATE_USER_SUCCESS,
        })
    }catch(e){
        dispatch({ 
            type:UPDATE_USER_FAILURE 
        });
    }
}

export const updatePassword = () => (dispatch, getState) => {
    return {
        type:UPDATE_PASWORD
    }
}

export const updatePasswordSuccess = (user) => (dispatch, getState) => {
    try{
        updatePassword();

        dispatch({
            type:UPDATE_PASWORD_SUCCESS,
        })
    }catch(e){
        dispatch({ 
            type:UPDATE_PASWORD_FAILURE 
        });
    }
}

export const deleteAccount = () => (dispatch, getState) => {
    return {
        type:DELETE_ACCOUNT
    }
}

export const deleteAccountSuccess = (user) => (dispatch, getState) => {
    try{
        deleteAccount();

        dispatch({
            type:DELETE_ACCOUNT_SUCCESS,
        })
    }catch(e){
        dispatch({ 
            type:DELETE_ACCOUNT_FAILURE 
        });
    }
}