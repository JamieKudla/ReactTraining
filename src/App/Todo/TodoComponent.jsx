import React from 'react';
import PropTypes from 'prop-types';

class TodoComponent extends React.Component {
	static propTypes = {
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
	}

	render() {
		const { id, title, complted } = this.props;

		return (
			<li>
				{title}
			</li>
		);
	}
}

export default TodoComponent;
