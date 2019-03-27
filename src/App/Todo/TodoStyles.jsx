import styled from 'styled-components';

export const Todo_li = styled.li`
	padding: 1em .5em;
	background-color: darkgrey;

	&:not(:last-child) {
		border-bottom: 1px solid black;
	}

	${({ isCompleted }) => isCompleted && `
		text-decoration: line-through;
		color: rgba(0, 0, 0, 50);
	`}
`;
