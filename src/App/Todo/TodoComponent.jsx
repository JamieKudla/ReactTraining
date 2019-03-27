import React from 'react';
import PropTypes from 'prop-types';

import { Todo_li } from './TodoStyles';
class TodoComponent extends React.Component {
	static propTypes = {
		toggleCompleted: PropTypes.func.isRequired,
		id: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		]).isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
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
		const { title, completed } = this.props;

		return (
			<Todo_li completed={completed}>
				<input
					type="checkbox"
					checked={completed}
					onChange={this.handleChange}
				/>
				{title}
			</Todo_li>
		);
	}
}

export default TodoComponent;
