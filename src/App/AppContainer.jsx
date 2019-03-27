import { connect } from 'react-redux';

import App from './AppComponent';
import todosActions from '../store/todos/todosActions';

const mapStateToProps = (state) => {
	return {
		todos: state.todos.data,
		isLoading: state.todos.isLoading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (todo) => dispatch(todosActions.addTodo(todo)),
		toggleCompleted: (todoId, completed) => dispatch(todosActions.toggleCompleted(todoId, completed)),
		fetchTodos: () => dispatch(todosActions.fetchTodos())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
