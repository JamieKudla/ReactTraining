import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';

export const cache = new InMemoryCache({
	cacheRedirects: {
		Query: {
			nodesById: (_, args, { getCacheKey }) => {
				return getCacheKey(
					{
						__typename: 'allComments',
						node_id: args.id,
					}
				);
			},
		},
	},
	dataIdFromObject: (object) => {
		switch (object.__typename) {
			case 'allComments': {
				return object.id;
			}
			default: {
				return defaultDataIdFromObject(object); // fall back to default handling
			}
		}
	}
});

export default cache;
