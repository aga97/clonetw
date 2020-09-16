import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './components/App';
import firebase from "./firebase";
//import * as serviceWorker from './serviceWorker';

console.log(firebase);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
