import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import newProductReducer from './newDucks';
import productReducer from './productDucks';
import homeProductReducer from './homeDucks';
import shopProductsReducer from './shopDucks';
import registerUserReducer from './registerDucks';
import userLoginReducer from './loginDucks';

const rootReducer = combineReducers({
    product: productReducer,
    newProduct: newProductReducer,
    homeProduct: homeProductReducer,
    shopProducts: shopProductsReducer,
    registration: registerUserReducer,
    login: userLoginReducer
})

//Configura la extensión de Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}