
const initialTodosState = {
	isLoading: false,
	data: [],
};

export function todosReducer(state = initialTodosState, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default todosReducer;
