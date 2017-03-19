// Added modules
import React from 'react';
import ReactDOM from 'react-dom';

// Local modules
import { App } from './app/app.js';

/**
 * Notes:
 *  - Using 'process.env.NODE_ENV' instead of variable, because only this way webpack correctly checks for environment and separates code
 */

// If environment is production
if (process.env.NODE_ENV === 'production') {
    // Render App component
    ReactDOM.render(<App />, document.getElementById('root'));

    // Disable 'React Developer Tools'
    // https://github.com/facebook/react-devtools/blob/master/shells/chrome/src/checkForReact.js
    if (
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers).length
    ) {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers = {};
    }
}

// If environment is development
if (process.env.NODE_ENV === 'development') {
    // AppContainer to tweak React components in real time
    const { AppContainer } = require('react-hot-loader');

    // Render function
    const render = (Component) => {
        ReactDOM.render(
            <AppContainer>
                <Component />
            </AppContainer>,
            document.getElementById('root')
        );
    };

    // Render App component
    render(App);

    // Enable HMR for App component
    if (module.hot) {
        module.hot.accept('./app/app.js', () => render(App));
    }
}