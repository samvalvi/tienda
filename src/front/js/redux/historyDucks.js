//Constantes
const initialState = {
    history: [],
    load: false,
    error: null
}

//Types
const HISTORY_LOAD = 'HISTORY_LOAD'
const HISTORY_LOAD_SUCCESS = 'HISTORY_LOAD_SUCCESS'
const HISTORY_LOAD_FAIL = 'HISTORY_LOAD_FAIL'


//Reducer
export default function historyReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'HISTORY_LOAD':
            return {
                ...state,
                load: true,
                error: null
            }
        case 'HISTORY_LOAD_SUCCESS':
            return {
                ...state,
                load: false,
                history: action.payload
            }
        case 'HISTORY_LOAD_FAIL':
            return {
                ...state,
                load: false,
                error: true
            }
        default:
            return state
    }
}

//Action Creators
export const loadHistory = () => async(dispatch, getState) => {
    return {
        type: HISTORY_LOAD
    }
}

export const loadHistorySuccess = (history) => async (dispatch, getState) => {
    try{
        loadHistory();

        dispatch({
            type: HISTORY_LOAD_SUCCESS,
        })

    }catch(e){
        dispatch({
            type: HISTORY_LOAD_FAIL
        })
    }
}