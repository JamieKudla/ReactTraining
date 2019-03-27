import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import GlobalStyles from './assets/styles/global';
import App from './App/AppComponent';

const MainComponent = ({ store }) => (
	<Fragment>
		<GlobalStyles />
		<Provider store={store}>
			<App />
		</Provider>
	</Fragment>
);

MainComponent.propTypes = {
	store: PropTypes.object,
};

export default MainComponent;
