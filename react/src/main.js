import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

$(document).ready(function() {
  let reactApp = document.getElementById('app');
  if (reactApp) {
    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );
  }
});
