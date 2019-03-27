export const ADD_TODO = 'ADD_TODO';
export function addTodo(todo) {
	return {
		type: ADD_TODO,
		payload: todo,
	};
}

export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export function toggleCompleted(todoId) {
	return {
		type: TOGGLE_COMPLETED,
		payload: todoId,
	};
}

export const TODOS_FETCH_REQUEST = 'TODOS_FETCH_REQUEST';
export function todosFetchRequest() {
	return {
		type: TODOS_FETCH_REQUEST,
	};
}

export const TODOS_FETCH_SUCCESS = 'TODOS_FETCH_SUCCESS';
export function todosFetchSuccess(todos) {
	return {
		type: TODOS_FETCH_SUCCESS,
		payload: todos,
	};
}

export const TODOS_FETCH_FAILED = 'TODOS_FETCH_FAILED';
export function todosFetchFailed(error) {
	return {
		type: TODOS_FETCH_FAILED,
		payload: error,
	};
}

export function fetchTodos() {
	return (dispatch) => {
		dispatch(todosFetchRequest());

		return fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((json) => dispatch(todosFetchSuccess(json)))
			.catch((error) => dispatch(todosFetchFailed(error)));
	};
}

export default {
	addTodo,
	toggleCompleted,
	fetchTodos,
};
