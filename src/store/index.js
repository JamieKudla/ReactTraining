import { combineReducers } from 'redux';
import todosReducer from './todos/todosReducers';

export const rootReducer = combineReducers({
	todos: todosReducer,
});

export default rootReducer;
