import { ApolloClient } from 'apollo-client';

import { cache } from './cache';
import { link } from './link';
import { resolvers } from './resolvers';

export const client = new ApolloClient({
	cache,
	link,
	resolvers,
});

export default client;
