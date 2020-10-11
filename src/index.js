import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import 'tachyons';
import { createStore } from 'redux';
import allReducers from './Redux/Reducers/index.js'
import { Provider } from 'react-redux'; 

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>  
  ,
  document.getElementById('root')
);

serviceWorker.unregister();

export default store;