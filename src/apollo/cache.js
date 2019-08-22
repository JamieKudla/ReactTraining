import {
	InMemoryCache,
	// defaultDataIdFromObject,
} from 'apollo-cache-inmemory';

export const cache = new InMemoryCache({
	// cacheRedirects: {
	// 	Query: {
	// 		// Comment by id
	// 		Comment: (_, args, { getCacheKey }) => {
	// 			return getCacheKey(
	// 				{
	// 					__typename: 'Comment',
	// 					node_id: args.id,
	// 				}
	// 			);
	// 		},
	// 	},
	// },
	// dataIdFromObject: (object) => {
	// 	switch (object.__typename) {
	// 		case 'Comment': {
	// 			return object.id;
	// 		}
	// 		default: {
	// 			return defaultDataIdFromObject(object); // fall back to default handling
	// 		}
	// 	}
	// }
});

export default cache;
