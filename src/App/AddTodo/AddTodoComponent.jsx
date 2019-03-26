import React from 'react';
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
	static propTypes = {
		todoAdd: PropTypes.func.isRequired,
	}

	constructor() {
		super();

		this.state = {
			todoText: '',
		};

		this.handleInput = this.handleInput.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	// Handles the oninput event
	handleInput(event) {
		const { value } = event.target;

		this.setState({
			todoText: value,
		});
	}

	// Handles the onclick event
	handleClick() {
		const { todoAdd } = this.props;
		const { todoText } = this.state;

		todoAdd(todoText);

		this.setState({
			todoText: '',
		});
	}

	render() {
		const { todoText } = this.state;

		return (
			<div>
				<input
					value={todoText}
					onChange={this.handleInput}
					type="text"
				/>
				<button
					type="button"
					onClick={this.handleClick}
				>
					ADD TODO
				</button>
			</div>
		);
	}
}

export default AddTodo;
