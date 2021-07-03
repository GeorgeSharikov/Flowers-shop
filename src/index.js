import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import  {createGlobalStyle} from 'styled-components'
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import { store } from './redux/store';

const Global = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
ul[class],
ol[class] {
  padding: 0;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}
ul[class],
ol[class] {
  list-style: none;
}
a:not([class]) {
  text-decoration-skip-ink: auto;
}
img {
  max-width: 100%;
  display: block;
}
article > * + * {
  margin-top: 1em;
}
input,
button,
textarea,
select {
  font: inherit;
}
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <Global />
        <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
