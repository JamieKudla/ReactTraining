import React from 'react';

import TodoList from './TodoList/TodoListComponent';

class AppComponent extends React.Component {
	state = {
		todos: [
			{
				id: 0,
				title: 'Walk the dog',
				completed: false,
			},
			{
				id: 1,
				title: 'Sweep the floor',
				completed: false,
			},
			{
				id: 2,
				title: 'Go grocery shopping',
				completed: false,
			},
		],
	}

	render() {
		return (
			<div>
				<TodoList todos={this.state.todos} />
			</div>
		);
	}
}

export default AppComponent;
