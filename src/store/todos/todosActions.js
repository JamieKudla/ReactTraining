export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export function toggleCompleted(todoId) {
	return {
		type: TOGGLE_COMPLETED,
		payload: todoId,
	};
}

export default {
	toggleCompleted,
};
