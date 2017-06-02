// Import React and React DOM
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import the Hot Module Reloading App Container
import { AppContainer } from 'react-hot-loader';

// Import our react App container component
import App from 'containers/App';

// This renders our App into the application root element, inside the HMR App Container
// which handles the reloading
const render = (Component) => ReactDOM.render(
  <AppContainer>
    <Component />
  </AppContainer>,
  document.getElementById('app')
);


// Tell Typescript that there is a global variable called module - see below
declare var module: { hot: any };

render(App);

// Handle hot reloading actions from Webpack
if (module.hot) {
  // The code below should work but it doesn't due to some issue: https://github.com/webpack/webpack-dev-server/issues/100#issuecomment-290911036
  // module.hot.accept('./containers/App', () => { render(App); });

  // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(NextApp);
  });
}
