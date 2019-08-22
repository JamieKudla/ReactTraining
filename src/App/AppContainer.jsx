// import gql from 'graphql-tag';

import App from './AppComponent';
// import { graphql } from 'react-apollo';
import { flowRight } from 'lodash-es';

const AppContainer = flowRight()(App);

export default AppContainer;
