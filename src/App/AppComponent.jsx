import React from 'react';
import { map } from 'lodash-es';

import TodoList from './TodoList/TodoListComponent';
import AddTodo from './AddTodo/AddTodoComponent';
import uuid from 'uuid';

class AppComponent extends React.Component {
	constructor() {
		super();

		this.state = {
			todos: [],
		};

		this.toggleCompleted = this.toggleCompleted.bind(this);
		this.todoAdd = this.todoAdd.bind(this);
	}

	// Toggles the isCompleted state for a todo item.
	toggleCompleted(todoId) {
		const { todos } = this.state;
		const updatedTodos = map(todos, (todo) => {
			if (todo.id === todoId) {
				todo.isCompleted = !todo.isCompleted;
			}

			return todo;
		});

		this.setState({
			todos: updatedTodos,
		});
	}

	// Add a todo item
	todoAdd(todoText) {
		const newTodo = {
			id: uuid.v4(),
			title: todoText,
			isCompleted: false,
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
		return (
			<div>
				<TodoList
					todos={this.state.todos}
					toggleCompleted={this.toggleCompleted}
				/>
				<AddTodo todoAdd={this.todoAdd} />
			</div>
		);
	}
}

export default AppComponent;
