import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import rootReducer from './store';
import Root from './RootComponent';

const composeEnhancers = composeWithDevTools({});
const store = createStore(
	rootReducer,
	{},
	composeEnhancers(applyMiddleware(ReduxThunk)),
);
const appRoot = document.getElementById('app-root');

ReactDOM.render(<Root store={store} />, appRoot);
