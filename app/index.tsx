// Import React and React DOM
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import the Hot Module Reloading App Container
import { AppContainer } from 'react-hot-loader';

// Import our react App container component
import App from './containers/App';

// This renders our App into the application root element, inside the HMR App Container
// which handles the reloading
const rootEl = document.getElementById('app');
ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  rootEl
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require<RequireImport>('./containers/App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>
      ,
      rootEl
    );
  });
}
