import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';

import apolloClient from './apollo/index';
import GlobalStyles from './assets/styles/global';
import App from './App/AppContainer';

const RootComponent = () => (
	<Fragment>
		<GlobalStyles />
		<ApolloProvider client={apolloClient}>
			<App />
		</ApolloProvider>
	</Fragment>
);

export default RootComponent;
