import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import rootReducer from './Reducer';
import ReduxThunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
