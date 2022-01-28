import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/main/Main'
import { store } from './store/main-store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
