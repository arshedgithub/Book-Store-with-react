import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter basename={'/Book-Store-with-react'}>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
