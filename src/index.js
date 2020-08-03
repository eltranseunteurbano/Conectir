import React, { Suspense } from 'react';

import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

import { FirebaseAppProvider } from 'reactfire';

import emailjs from "emailjs-com";

import App from './App';
import * as serviceWorker from './serviceWorker';

import reducer from './redux/reducers';
import firebaseConfig from './utils/firebase-config';

const initialState = {
  user: {},
  info: "name",
  process: 1,
  isComprobateLogin: "wait",
  goToUrl: "wait"
}

//Redux debugger en chrome
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, initialState, composeEnhancers);

emailjs.init("user_s4BftO38CcfGdD2CEp5hU");

ReactDOM.render(
  <Provider store={store}>
    {/**  <FirebaseAppProvider firebaseConfig={firebaseConfig}> */}
    <Suspense fallback='Cargando'>
      <App />
    </Suspense>
    {/** </FirebaseAppProvider> */}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
