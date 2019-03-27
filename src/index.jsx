import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import rootReducer from './store';
import Main from './MainComponent';

const composeEnhancers = composeWithDevTools({});
const store = createStore(
	rootReducer,
	{},
	composeEnhancers(applyMiddleware(ReduxThunk)),
);
const appRoot = document.getElementById('appRoot');

ReactDOM.render(<Main store={store} />, appRoot);
