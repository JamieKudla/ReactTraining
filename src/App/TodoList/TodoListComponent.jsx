import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash-es';

import Todo from '../Todo/TodoComponent';

class TodoListComponent extends React.Component {
	static propTypes = {
		toggleCompleted: PropTypes.func.isRequired,
		todos: PropTypes.array,
	};

	render() {
		const { todos, toggleCompleted } = this.props;

		return (
			<ul>
				{map(todos, (todo) => (
					<Todo
						key={todo.id}
						{...todo}
						toggleCompleted={toggleCompleted}
					/>
				))}
			</ul>
		);
	}
}

export default TodoListComponent;

