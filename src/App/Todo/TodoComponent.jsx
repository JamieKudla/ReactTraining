import React from 'react';
import PropTypes from 'prop-types';

class TodoComponent extends React.Component {
	static propTypes = {
		toggleCompleted: PropTypes.func.isRequired,
		id: PropTypes.number.isRequired,
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
			<li>
				<input
					type="checkbox"
					checked={isCompleted}
					onChange={this.handleChange}
				/>
				{title}
			</li>
		);
	}
}

export default TodoComponent;
