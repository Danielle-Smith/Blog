import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './style/main.scss';
import 'bootstrap/dist/css/bootstrap.css';

function main() {
  ReactDOM.render(
    <App />
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
