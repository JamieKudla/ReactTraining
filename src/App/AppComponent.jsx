import React from 'react';

import { map } from 'lodash-es';
import PropTypes from 'prop-types';

function AppComponent(props) {
	const { createComment, allComments, updateComment } = props;

	const handleUpdateComment = (id) => {
		updateComment({
			variables: {
				id,
				text: 'I was updated!!!'
			}
		});
	};

	const handleCreateComment = () => {
		createComment({
			variables: { text: 'weeee woooo' }
		});
	};

	return (
		<div>
			App Component!
			{map(allComments, (comment) => (
				<div key={comment.id}>
					{comment.text}
					<button onClick={() => handleUpdateComment(comment.id)}>
						Update Comment Text
					</button>
				</div>
			))}
			<button onClick={handleCreateComment}>Add Comment</button>
		</div>
	);
}

AppComponent.propTypes = {
	updateComment: PropTypes.any,
	createComment: PropTypes.any,
	allComments: PropTypes.any,
};

export default AppComponent;
