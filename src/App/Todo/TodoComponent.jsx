import React from 'react';
import PropTypes from 'prop-types';

import { Todo_li } from './TodoStyles';
class TodoComponent extends React.Component {
	static propTypes = {
		toggleCompleted: PropTypes.func.isRequired,
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		isCompleted: PropTypes.bool.isRequired,
	}

	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		const { toggleCompleted, id } = this.props;
		toggleCompleted(id);
	}

	render() {
		const { title, isCompleted } = this.props;

		return (
			<Todo_li isCompleted={isCompleted}>
				<input
					type="checkbox"
					checked={isCompleted}
					onChange={this.handleChange}
				/>
				{title}
			</Todo_li>
		);
	}
}

export default TodoComponent;
