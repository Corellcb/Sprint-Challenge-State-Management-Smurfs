import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));