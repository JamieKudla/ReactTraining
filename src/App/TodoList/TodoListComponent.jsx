import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../Todo/TodoComponent';
import { TodoList_ul } from './TodoListStyles';

import { map } from 'lodash-es';

class TodoListComponent extends React.Component {
	static propTypes = {
		toggleCompleted: PropTypes.func.isRequired,
		todos: PropTypes.array,
	};

	render() {
		const { todos, toggleCompleted } = this.props;

		return (
			<TodoList_ul>
				{map(todos, (todo) => (
					<Todo
						key={todo.id}
						{...todo}
						toggleCompleted={toggleCompleted}
					/>
				))}
			</TodoList_ul>
		);
	}
}

export default TodoListComponent;

