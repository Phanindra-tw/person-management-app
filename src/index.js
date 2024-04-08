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

export * from './containers/CreatePerson';
export * from './containers/PersonDashboard';
export * from './containers/EditPerson';
