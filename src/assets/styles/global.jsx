import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html,
	body {
		margin: 0;
		height: 100%;
		background-color: black;
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		color: white;
	}

	#appRoot {
		display: flex;
	}
`;

export default GlobalStyle;
