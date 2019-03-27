import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../Todo/TodoComponent';

import { map } from 'lodash-es';

class TodoListComponent extends React.Component {
	static propTypes = {
		todos: PropTypes.array,
	}

	static defaultProps = {
		todos: [],
	}

	render() {
		const { todos } = this.props;

		return (
			<ul>
				{
					map(todos, (todo) => (
						<Todo key={todo.id} {...todo} />
					))
				}
			</ul>
		);
	}
}

export default TodoListComponent;
