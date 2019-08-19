// import { gql } from 'graphql-tag';

/**
 * This is just example code :)
 */
export const resolvers = {
	// Mutation: {
	// 	toggleTodo: (_root, variables, { cache, getCacheKey }) => {
	// 		// get the cache id of the todo in our cache that has the id used in the mutation
	// 		const id = getCacheKey({ __typename: 'TodoItem', id: variables.id });
	// 		// fragment that reads the completed status on a TodoItem
	// 		const fragment = gql`
	// 			fragment completeTodo on TodoItem {
	// 				completed
	// 			}
	// 		`;
	// 		// get the fragment of the todo that we have the id of
	// 		const todo = cache.readFragment({ fragment, id });
	// 		// toggle the completed status value of the todo we just got
	// 		const data = { ...todo, completed: !todo.completed };
	// 		// write the toggled completed status to our cache
	// 		cache.writeData({ id, data });

	// 		/**
	// 		 * no need for the mutations return result here so use null since all gql
	// 		 * types are nullable by default.
	// 		 */
	// 		return null;
	// 	},
	// }
};

export default resolvers;
