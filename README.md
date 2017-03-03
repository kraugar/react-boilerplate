# React Boilerplate (still need to finish)

**Features:**
- Node.js for back-end and React for front-end;
- Made structure which fits small, medium or large project (you can change it according to your needs);
- React, JSX, ES6 and Flow syntax support;
- Language extras beyond ES6 like the object spread operator, etc.;
- Some experimental syntax extensions (e.g. decorators);
- Server rendering support;
- Import CSS and images directly from JavaScript;
- Autoprefixed CSS, so you don’t need `-webkit` or other prefixes;
- CSS Modules support;
- LESS or Sass support;
- Includes a lot of ready to use commands for better development and production;
- Configured ESLint and stylelint for better code analysis;
- Includes Jest testing framework;
- Hot Reload (server & client), forget about F5;
- Ready for development and production;
- Increases your productivity by letting you to code instantly without any configuration;
- There are **NO LIMITATIONS**, do whatever you want.

**How to start?**

1. Install -> [Node.js](https://nodejs.org/en/download)
2. Install -> [Yarn](https://yarnpkg.com/en/docs/install)
3. Install -> [Git](https://git-scm.com/downloads)
4. Download project with git -> `git clone https://github.com/svipben/react-boilerplate.git`
5. Go to the directory where you downloaded the project
6. Install all needed packages -> `yarn install:all`
7. Run development server -> `yarn run:dev`
8. That's it, you're ready to develop apps faster than ever before!
9. Not necessary, but you can edit `package.json`, `src/assets/humans.txt` and `README.md`

**Project structure:**
- `.vscode/` - VS Code workspace settings
    - `launch.json` - VS Code debug configuration
- `build/` - compiled src (server & client)
- `node_modules/` - Node.js packages
- **`src/__tests__/`** - tests directory
- **`src/assets/`** - static files (e.g. fonts, images, etc.)
    - `fonts/` - fonts directory
    - `images/` - images directory
    - `humans.txt` - contains information about the people who have contributed to building the app
    - `robots.txt` - gives instructions about app to web robots
- **`src/client/`** - front-end
    - `app/` - main client files
        - `app.css` - main style which need to be used inside `app.jsx`
        - `app.jsx` - main component which contains other React components (e.g. header, footer, navbar, etc.)
    - `client.js` - client entry point (renders `app/app.jsx` with ReactDOM)
- **`src/server/`** - back-end
    - `config.js` - server configuration (e.g. port, hostname, etc.)
    - `server.js` - server entry point (starts app with Express framework)
- `webpack/` - webpack configurations
    - `dev.config.js` - development configuration
    - `dev.server.js` - development server
    - `prod.config.js` - production configuration
- `.babelrc` - Babel configuration
- `.eslintrc.json` - ESLint configuration
- `.flowconfig` - Flow configuration
- `.gitignore` - specifies intentionally untracked files that Git should ignore
- `.stylelintrc.json` - stylelint configuration
- `package.json` - various metadata relevant to the project
- `README.md` - project description

**Commands compatibility:**
- Linux;
- macOS;
- *TODO: Windows support (cross-env & rm command)*

**Commands:**
- `run:dev` - run development server with **PM2**, Hot Reload (server & client) and debug mode
- `run:dev-cluster` - run development server with **PM2**, Hot Reload (server & client), cluster mode and debug mode
- `run:dev-babel` - run development server with **babel-node**, Hot Reload (client only) and debug mode
- `run:prod` - build (server & client) and run production server with **PM2**
- `run:prod-cluster` - build (server & client) and run production server with **PM2** and cluster mode
- `run:prod-debug` - build (server & client) and run production server with **PM2**, Hot Reload (server & client) and debug mode
- `run:prod-debug-cluster` - build (server & client) and run production server with **PM2**, Hot Reload (server & client), cluster mode and debug mode
- `run:prod-node` - build (server & client) and run production server with **node**
- `run:prod-babel` - build (server & client) and run production server with **babel-node**
- `run:test` - run tests with **Jest**
- `run:test-coverage` - run tests with **Jest** and code coverage report
- `run:test-watch` - run tests with **Jest** and watch mode
- `pm2:stop` - remove all processes from **PM2** list
- `pm2:update` - update **PM2**
- `build:server` - build server for production with **Babel**
- `build:client` - build client for production with **Babel** and **Webpack**
- `build:both` - build both (server & client) for production with **Babel** and **Webpack**
- `remove:build` - remove `build` directory
- `remove:packages` - remove `node_modules` directory and `yarn.lock` file
- `remove:coverage` - remove `coverage` directory
- `remove:all` - remove all directories (`build`, `node_modules`, `coverage`) and `yarn.lock` file
- `install:global` - install global packages with **Yarn**
- `install:prod` - install production packages (local) with **Yarn**
- `install:dev` - install development packages (local) with **Yarn**
- `install:local` - install production and development packages (local) with **Yarn**
- `install:all` - install all packages (global & local) with **Yarn**
- `update:local` - update production and development packages (local) with **Yarn**
- `update:all` - update all packages (global & local) with **Yarn**
- `version:patch` - increase the last version number, e.g. 1.0.1 (bug fixes and other minor changes) with **Yarn**
- `version:minor` - increase the middle version number, e.g. 1.1.0 (new features which don't break existing features) with **Yarn**
- `version:major` - increase the first version number, e.g. 2.0.0 (changes which break backwards compatibility) with **Yarn**
- `version:clean` - change version back to 1.0.0
- `git:credentials` - store git credentials on disk
- *Remember all commands starts with `yarn`!*

**Used global packages:**
- [pm2](http://pm2.keymetrics.io) - process manager
- [flow-bin](https://flowtype.org) - JavaScript type checker
- [babel-cli](http://babeljs.io) - JavaScript compiler (command line)

**Used local packages:**
- [express](http://expressjs.com) - web framework for Node.js
- [react & react-dom](https://facebook.github.io/react) - JavaScript library for building UI
- [jest](https://facebook.github.io/jest) - JavaScript testing framework
- [stylelint](https://stylelint.io) - CSS linter
- [eslint](http://eslint.org) - JavaScript and JSX linter
    - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - React linter
    - [babel-eslint](https://github.com/babel/babel-eslint) - Babel linter
- [babel-runtime](https://github.com/babel/babel/tree/master/packages/babel-runtime) - used by transpiled code at runtime
    - [babel-plugin-transform-runtime](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime) - transforms code to remove the helpers and use the ones in babel-runtime
- [babel-core](https://github.com/babel/babel/tree/master/packages/babel-core) - Babel compiler core
    - [babel-preset-latest](https://github.com/babel/babel/tree/master/packages/babel-preset-latest) - Babel preset including es2015, es2016, es2017
    - [babel-preset-flow](https://github.com/babel/babel/tree/master/packages/babel-preset-flow) - Babel preset for all Flow plugins
    - [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react) - Babel preset for all React plugins
    - [babel-preset-stage-2](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-2) - Babel preset for stage 2 plugins
- [webpack](https://webpack.js.org) - module bundler
    - [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) - dev middleware for webpack, which arguments a live bundle to a directory
    - [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) - webpack hot reloading
    - [babel-loader](https://github.com/babel/babel-loader) - webpack plugin for Babel
    - [react-hot-loader](https://github.com/gaearon/react-hot-loader) - tweak React components in real time
    - [style-loader](https://github.com/webpack-contrib/style-loader) - style loader module for webpack
    - [css-loader](https://github.com/webpack-contrib/css-loader) - css loader module for webpack
    - [postcss-loader](https://github.com/postcss/postcss-loader) - PostCSS loader for webpack
    - [precss](https://github.com/jonathantneal/precss) - use Sass-like markup in your CSS

**[Visual Studio Code:](https://code.visualstudio.com)**
- Use this project with VS Code for best development experience;
- VS Code is free, open source and runs everywhere;
- VS Code have syntax highlighting and autocomplete;
- VS Code have git built-in;
- VS Code have integrated terminal;
- VS Code have a lot of extensions to increase your productivity;
- Easily debug your app right from editor by setting breakpoints and by pressing F5.