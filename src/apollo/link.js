import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message, locations, path }) => (
			console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
		));
	}
	if (networkError) {
		console.error(`[Network error]: ${networkError}`);
	}
});

/**
 * The graphql server link
 */
const httpLink = new HttpLink({
	uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex',
});

export const link = ApolloLink.from([
	errorLink,
	httpLink,
]);

export default link;
