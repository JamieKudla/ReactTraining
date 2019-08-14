import {
	TOGGLE_COMPLETED,
} from './todosActions';

import { map } from 'lodash-es';

const initialTodosState = {
	isLoading: false,
	error: null,
	data: [
		{
			id: 0,
			title: 'Teach React',
			completed: false,
		}
	],
};

export function todosReducer(state = initialTodosState, action) {
	switch (action.type) {
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
		default:
			return state;
	}
}

export default todosReducer;
