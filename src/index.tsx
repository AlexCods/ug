import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { Navigation } from './routes/Navigation';
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Navigation />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

