import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import style from '../stylesheets/application.scss';

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.querySelector("#root"));
})