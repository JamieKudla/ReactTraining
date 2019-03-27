import { map } from 'lodash-es';

import {
	ADD_TODO,
	TOGGLE_COMPLETED,
	TODOS_FETCH_REQUEST,
	TODOS_FETCH_SUCCESS,
	TODOS_FETCH_FAILED,
} from './todosActions';

const initialTodosState = {
	isLoading: false,
	data: [],
	error: null,
};

export function todosReducer(state = initialTodosState, action) {
	switch (action.type) {
		case TODOS_FETCH_REQUEST: {
			return {
				...state,
				isLoading: true,
				error: null,
			};
		}
		case TODOS_FETCH_SUCCESS: {
			return {
				...state,
				isLoading: false,
				data: action.payload,
			};
		}
		case TODOS_FETCH_FAILED: {
			return {
				...state,
				error: action.payload,
				isLoading: false,
			};
		}
		case ADD_TODO: {
			return {
				...state,
				data: [
					...state.data,
					action.payload,
				]
			};
		}
		case TOGGLE_COMPLETED: {
			const updatedTodos = map(state.data, (todo) => {
				if (todo.id === action.payload) {
					todo.completed = !todo.completed;
				}

				return todo;
			});

			return {
				...state,
				data: updatedTodos,
			};
		}
		default: {
			return state;
		}
	}
}

export default todosReducer;
