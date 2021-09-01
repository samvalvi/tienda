import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './front/styles/index.css'
import './front/styles/badge.css'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './front/js/redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

