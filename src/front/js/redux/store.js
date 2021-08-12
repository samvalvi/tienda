import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import newProductReducer from './newDucks';
import productReducer from './productDucks';
import homeProductReducer from './homeDucks';
import shopProductsReducer from './shopDucks';
import registerUserReducer from './registerDucks';
import userLoginReducer from './loginDucks';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['login']
};

const rootReducer = combineReducers({
    product: productReducer,
    newProduct: newProductReducer,
    homeProduct: homeProductReducer,
    shopProducts: shopProductsReducer,
    registration: registerUserReducer,
    login: userLoginReducer
})


const persistedReducer =  persistReducer(persistConfig, rootReducer)

//Configura la extensión de Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

const persistor = persistStore(store);

export {
    store,
    persistor
}
