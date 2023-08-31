import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import products from './reducers/index'
import "@mui/material"
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import "@fontsource/ubuntu"; // Defaults to weight 400
import "@fontsource/ubuntu/400.css"; // Specify weight
import "@fontsource/ubuntu/400-italic.css";

const store = createStore(products)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
        <App />
    </Provider>
)
