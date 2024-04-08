import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,

  document.getElementById('root')
);
registerServiceWorker();

export { default as CreatePerson } from './containers/CreatePerson';
export { default as PersonDashboard } from './containers/PersonDashboard';
export { default as EditPerson } from './containers/EditPerson';
