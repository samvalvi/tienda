import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import newProductReducer from './newDucks';
import productReducer from './productDucks';
import homeProductReducer from './homeDucks';
import shopProductsReducer from './shopDucks';
import registerUserReducer from './registerDucks';
import userLoginReducer from './loginDucks';
import cartReducer from './bagDucks';
import badgeReducer from './badgeDucks';


const persistConfig = {
    key: 'DilzP',
    storage: AsyncStorage
}

const rootReducer = combineReducers({
    product: productReducer,
    newProduct: newProductReducer,
    homeProduct: homeProductReducer,
    shopProducts: shopProductsReducer,
    registration: registerUserReducer,
    login: userLoginReducer,
    bag: cartReducer,
    badge: badgeReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


//Configura la extensión de Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);