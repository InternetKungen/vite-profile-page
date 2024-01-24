import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import themeReducer from './Redux/reducers/themeReducer.js';

const store = legacy_createStore(
  themeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store }> { /** Gör vår store tillgänglig för vår React app */ }
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)
