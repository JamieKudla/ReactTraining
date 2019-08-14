import React from 'react';
import PropTypes from 'prop-types';

import TodoList from './TodoList/TodoListComponent';
import AddTodo from './AddTodo/AddTodoComponent';

import uuid from 'uuid';

class AppComponent extends React.Component {
	static propTypes = {
		toggleCompleted: PropTypes.func.isRequired,
		todos: PropTypes.array.isRequired,
	}

	constructor() {
		super();

		this.todoAdd = this.todoAdd.bind(this);
	}

	// Add a todo item
	todoAdd(todoText) {
		const newTodo = {
			id: uuid.v4(),
			title: todoText,
			completed: false,
		};
		const updatedTodos = [
			...this.state.todos,
			newTodo,
		];

		this.setState({
			todos: updatedTodos,
		});
	}

	render() {
		const { toggleCompleted, todos } = this.props;

		return (
			<div>
				<TodoList
					todos={todos}
					toggleCompleted={toggleCompleted}
				/>
				<AddTodo todoAdd={this.todoAdd} />
			</div>
		);
	}
}

export default AppComponent;
