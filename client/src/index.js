import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App.js';
import reportWebVitals from './reportWebVitals.js';
import  {Global} from './GlobalStyledComponents/GlobalStyles.js'
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import { store } from './store/store.js';

if(!!!document.cookie){
    let date = new Date(Date.now() + 86400e3);
    date = date.toUTCString();
    document.cookie = "visited=true; expires=" + date;
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Global />
            <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
