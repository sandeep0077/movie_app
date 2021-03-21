import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import movies from './reducers/index'


// we will pass the store in the argument
const store = createStore(movies)
  console.log('store', store)
// console.log('Before State', store.getState())


// // dispatching an action 
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies:[{name: 'Superman'}]
// })

// console.log('After State', store.getState())



ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();