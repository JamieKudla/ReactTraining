import React from 'react';
import PropTypes from 'prop-types';

import TodoList from './TodoList/TodoListComponent';
import AddTodo from './AddTodo/AddTodoComponent';

import uuid from 'uuid';

class AppComponent extends React.Component {
	static propTypes = {
		todos: PropTypes.array,
		isLoading: PropTypes.bool,
		addTodo: PropTypes.func,
		toggleCompleted: PropTypes.func,
		fetchTodos: PropTypes.func,
	}

	constructor() {
		super();

		this.state = {
			todos: [],
		};

		this.toggleCompleted = this.toggleCompleted.bind(this);
		this.todoAdd = this.todoAdd.bind(this);
	}

	componentDidMount() {
		this.props.fetchTodos();
	}

	// Toggles the completed state for a todo item.
	toggleCompleted(todoId) {
		this.props.toggleCompleted(todoId);
	}

	// Add a todo item
	todoAdd(todoText) {
		const newTodo = {
			id: uuid.v4(),
			title: todoText,
			completed: false,
		};

		this.props.addTodo(newTodo);
	}

	render() {
		return (
			<div>
				{ this.props.isLoading ? 'LOADING...' : null }
				<TodoList
					todos={this.props.todos}
					toggleCompleted={this.toggleCompleted}
				/>
				<AddTodo todoAdd={this.todoAdd} />
			</div>
		);
	}
}

export default AppComponent;
