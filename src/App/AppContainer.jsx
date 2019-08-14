import { connect } from 'react-redux';

import App from './AppComponent';
import todosActions from '../store/todos/todosActions';

function mapStateToProps(state) {
	return {
		todos: state.todos.data,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		toggleCompleted: (todoId) => dispatch(todosActions.toggleCompleted(todoId)),
	};
}

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);

export default AppContainer;
