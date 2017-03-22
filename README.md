# Features

- Node.js for back-end and React for front-end;
- Made structure which fits small, medium or large project (you can change it according to your needs);
- React, JSX, ES6 and Flow syntax support;
- Language extras beyond ES6 (e.g. object spread operator);
- Some experimental syntax extensions (e.g. decorators);
- Server rendering support;
- Import CSS and images directly from JavaScript;
- Autoprefixed CSS, so you don’t need `-webkit` or other prefixes;
- CSS Modules support;
- Includes a lot of ready to use commands for better development and production;
- Configured ESLint and stylelint for better code analysis;
- Includes Jest testing framework;
- Hot Reload for client, forget about F5;
- Ready for development and production;
- Increases your productivity by letting you to code instantly without any configuration;
- There are **NO LIMITATIONS**, do whatever you want.

# How to start?

1. Install -> [Node.js](https://nodejs.org/en/download)
2. Install -> [Yarn](https://yarnpkg.com/en/docs/install)
3. Install -> [Git](https://git-scm.com/downloads)
4. Clone project with git -> `git clone https://github.com/svipben/react-boilerplate.git`
5. Go to the directory where you downloaded the project
6. Install all needed packages -> `yarn install:all`
7. Run development server -> `yarn run:dev`
8. That's it, you're ready to develop apps faster than ever before!

**Not necessary, but you can edit**
- `public/favicon.ico`
- `public/humans.txt`
- `public/index.html`
- `package.json`
- `README.md`

# Project structure

- `dist/` - compiled client src
- `node_modules/` - Node.js packages
- **`public/`** - static files
    - `favicon.ico` - small, iconic image that represents your website
    - `humans.txt` - contains information about the people who have contributed to building the app
    - `index.html` - template which will be used by webpack (more information inside file)
    - `robots.txt` - gives instructions about app to web robots
- **`src/__tests__/`** - tests directory
    - `app.test.js` - simple test demonstration
- **`src/client/`** - front-end
    - `app/` - main client files
        - `app.css` - main style which will be used by `app.js`
        - `app.js` - main component which contains other React components (e.g. header, footer, navbar, etc.)
    - `client.js` - client entry point (renders `app/app.js` with ReactDOM)
- **`src/server/`** - back-end
    - `config.js` - server configuration (e.g. port, hostname, etc.)
    - `routes.js` - server end points (URIs)
    - `server.js` - server entry point (starts app with Express framework)
- `webpack/` - webpack configurations
    - `dev.config.js` - development configuration
    - `dev.server.js` - development server
    - `prod.config.js` - production configuration
- `.babelrc` - Babel configuration
- `.eslintignore` - ESLint ignores specific files and directories
- `.eslintrc.json` - ESLint configuration
- `.flowconfig` - Flow configuration
- `.gitignore` - specifies intentionally untracked files that Git should ignore
- `.stylelintignore` - stylelint ignores specific files and directories
- `.stylelintrc.json` - stylelint configuration
- `jsconfig.json` - indicates that the directory is the root of a JavaScript project
- `LICENSE.txt` - project license
- `package.json` - various metadata relevant to the project
- `README.md` - project description
- `yarn.lock` - will be autogenerated by Yarn

# Commands

- `run:dev` - run development server with **PM2** (Hot Reload for client & reload / debug mode for server)
- `run:dev-cluster` - run development server with **PM2** (Hot Reload for client & cluster / reload for server)
- `run:prod` - build client and run production server with **PM2**
- `run:prod-cluster` - build client and run production server with **PM2** (cluster mode for server)
- `run:test` - run tests with **Jest**
- `run:test-coverage` - run tests with **Jest** and code coverage report
- `run:test-watch` - run tests with **Jest** and watch mode
- `pm2:stop` - remove all processes from **PM2** list
- `pm2:update` - update **PM2**
- `build` - build client for production with **Webpack**
- `remove:build` - remove `dist` directory
- `remove:packages` - remove `node_modules` directory and `yarn.lock` file
- `remove:coverage` - remove `coverage` directory
- `remove:snapshots` - remove `src/__tests__/__snapshots__` directory
- `remove:all` - remove all directories and files
- `install:global` - install global packages with **Yarn**
- `install:prod` - install local production packages with **Yarn**
- `install:dev` - install local development packages with **Yarn**
- `install:local` - install local production and development packages with **Yarn**
- `install:all` - install all packages with **Yarn**
- `update:local` - update local production and development packages with **Yarn**
- `update:all` - update all packages with **Yarn**
- `version:patch` - increase last version number, e.g. 1.0.1 (bug fixes and other minor changes)
- `version:minor` - increase middle version number, e.g. 1.1.0 (new features which don't break existing features)
- `version:major` - increase first version number, e.g. 2.0.0 (changes which break backwards compatibility)
- `version:clean` - change version back to 1.0.0
- `git:credentials` - store git credentials on disk
- *Remember all commands starts with `yarn`!*

# Used packages

**Global**
- [pm2](http://pm2.keymetrics.io) - process manager
- [flow-bin](https://flowtype.org) - JavaScript type checker

**Local production**
- **Express**
    - [express](http://expressjs.com) - web framework
    - [serve-favicon](https://github.com/expressjs/serve-favicon) - middleware for serving favicon
- **React**
    - [react & react-dom](https://facebook.github.io/react) - JavaScript library for building UI
- **Utils**
    - [fs-extra](https://github.com/jprichardson/node-fs-extra) - extra methods for the `fs` object like `copy()`, `remove()`, `mkdirs()`
    - [chalk](https://github.com/chalk/chalk) - terminal string styling done right

**Local development**
- **Linters**
    - [stylelint](https://stylelint.io) - CSS linter
    - [eslint](http://eslint.org) - JavaScript and JSX linter
        - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - React linter
        - [babel-eslint](https://github.com/babel/babel-eslint) - Babel linter
        - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - turns off all rules that are unnecessary or might conflict with prettier
- **Babel**
    - [babel-preset-env](https://github.com/babel/babel-preset-env) - automatically determine the Babel plugins and polyfills you need based on your supported environments
    - [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react) - preset for all React plugins
    - [babel-preset-stage-2](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-2) - preset for stage-2 plugins
- **Webpack**
    - [webpack](https://webpack.js.org) - module bundler
    - [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) - dev middleware, which arguments live bundle to directory
    - [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) - hot reloading you can attach to your own server
    - [babel-loader](https://github.com/babel/babel-loader) - allows transpiling JavaScript files using Babel
    - [react-hot-loader](https://github.com/gaearon/react-hot-loader) - tweak React components in real time
    - [file-loader](https://github.com/webpack-contrib/file-loader) - file loader
    - [url-loader](https://github.com/webpack-contrib/url-loader) - url loader
    - [style-loader](https://github.com/webpack-contrib/style-loader) - adds CSS to the DOM by injecting a `<style>` tag
    - [css-loader](https://github.com/webpack-contrib/css-loader) - interprets `@import` and `url()` like `requires`
    - [postcss-loader](https://github.com/postcss/postcss-loader) - PostCSS loader to postprocesses your CSS with PostCSS plugins
    - [precss](https://github.com/jonathantneal/precss) - use Sass-like markup in your CSS
    - [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) - simplifies creation of HTML files to serve your webpack bundles
    - [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) - extract text from bundle into file
    - [webpack-chunk-hash](https://github.com/alexindigo/webpack-chunk-hash) - replaces standard webpack chunkhash with md5
    - [webpack-manifest-plugin](https://github.com/danethurber/webpack-manifest-plugin) - plugin for generating asset manifests
    - [chunk-manifest-webpack-plugin](https://github.com/soundcloud/chunk-manifest-webpack-plugin) - allows exporting manifest that maps entry chunk names to their output files, instead of keeping the mapping inside the webpack bootstrap
- **Tests**
    - [jest](https://facebook.github.io/jest) - JavaScript testing framework
        - [babel-jest](https://github.com/facebook/jest/tree/master/packages/babel-jest) - Babel plugin for Jest
        - [identity-obj-proxy](https://github.com/keyanzhang/identity-obj-proxy) - an identity object using ES6 proxies, useful for mocking webpack imports