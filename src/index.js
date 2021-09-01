import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './front/styles/index.css'
import './front/styles/badge.css'
import {generateStore} from './front/js/redux/store'
import {Provider} from 'react-redux'

const store = generateStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

