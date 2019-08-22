import gql from 'graphql-tag';

import App from './AppComponent';
import { graphql } from 'react-apollo';
import { flowRight } from 'lodash-es';

const GET_ALL_COMMENTS = gql`
	query GetAllComments {
		allComments {
			id
			text
		}
	}
`;

const CREATE_COMMENT = gql`
	mutation CreateComment($text: String!) {
		createComment(text: $text) {
			id
			text
		}
	}
`;

const UPDATE_COMMENT = gql`
	mutation UpdateComment($id: ID!, $text: String) {
		updateComment(id: $id, text: $text) {
			id
			text
		}
	}
`;

const AppContainer = flowRight(
	graphql(
		GET_ALL_COMMENTS, {
			props: ({ data: { allComments } }) => ({
				allComments,
			}),
		}
	),
	graphql(
		CREATE_COMMENT, {
			props: ({ mutate, result }) => ({
				createComment: mutate,
				createCommentResult: result,
			}),
			options: {
				update: (cache, { data: { createComment } }) => {
					const data = cache.readQuery({ query: GET_ALL_COMMENTS });

					data.allComments = [...data.allComments, createComment];
					cache.writeQuery({ query: GET_ALL_COMMENTS, data });
				},
			}
		}
	),
	graphql(
		UPDATE_COMMENT, {
			props: ({ mutate, result }) => ({
				updateComment: mutate,
				updateCommentResult: result,
			}),
		}
	),
)(App);

export default AppContainer;
