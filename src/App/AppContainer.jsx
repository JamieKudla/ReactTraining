import gql from 'graphql-tag';

import App from './AppComponent';
import { graphql } from 'react-apollo';

const GET_ALL_COMMENTS = gql`
	query GetAllComments {
		allComments {
			id
		}
	}
`;

const AppContainer = graphql(
	GET_ALL_COMMENTS, {
		props: ({ data: { allComments } }) => ({
			allComments,
		}),
	}
)(App);

export default AppContainer;
