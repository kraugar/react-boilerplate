# React Boilerplate (still need to finish)

**Features:**
- Node.js for back-end and React for front-end
- Made structure which fits small, medium or large project (you can change it according to your needs)
- React, JSX, ES6 and Flow syntax support
- Language extras beyond ES6 like the object spread operator, etc.
- Some experimental syntax extensions (e.g. decorators)
- Server rendering support
- Import CSS and images directly from JavaScript
- Autoprefixed CSS, so you don’t need `-webkit` or other prefixes
- CSS Modules support
- LESS or Sass support
- Includes a lot of ready to use commands for better development and production
- Configured ESLint and stylelint for better code analysis
- Hot Reload (server & client), forget about F5!
- Ready for development and production!
- There are **NO LIMITATIONS**, do whatever you want!

**How to start?**

1. Install -> [Node.js](https://nodejs.org/en/download)
2. Install -> [Yarn](https://yarnpkg.com/en/docs/install)
3. Download project with git -> `git clone https://github.com/svipben/react-boilerplate.git`
4. Go to the directory where you downloaded the project
5. Install all needed packages -> `yarn init-packages`
6. Launch development server -> `yarn dev`
7. That's it, you're ready to develop apps faster than ever before!
8. Not necessary, but you can edit `package.json`, `src/assets/humans.txt` and `README.md`

**Project structure:**
- .vscode - TODO
    - launch.json - TODO
- build - TODO
- node_modules - TODO
- src/assets - TODO
    - fonts - TODO
    - images - TODO
    - humans.txt - TODO
    - robots.txt - TODO
- src/client - TODO
    - app - TODO
        - app.css - TODO
        - app.jsx - TODO
    - client.js - TODO
- src/server - TODO
    - config.js - TODO
    - server.js - TODO
- webpack - TODO
    - dev.config.js - TODO
    - dev.server.js - TODO
    - prod.config.js - TODO
- .babelrc - TODO
- .eslintrc.json - TODO
- .flowconfig - TODO
- .gitignore - TODO
- .stylelintrc.json - TODO
- package.json - TODO
- README.md - TODO

**Commands compatibility:**
- Debian and Ubuntu
- *More in the future!*

**Commands:**
- `dev` - launch development server with **PM2**, Hot Reload (server & client) and debug mode
- `dev-cluster` - launch development server with **PM2**, Hot Reload (server & client), cluster mode and debug mode
- `dev-babel-node` - launch development server with **babel-node**, Hot Reload (client only) and debug mode
- `prod` - build (server & client) and launch production server with **PM2**
- `prod-cluster` - build (server & client) and launch production server with **PM2** and cluster mode
- `prod-debug` - build (server & client) and launch production server with **PM2**, Hot Reload (server & client) and debug mode
- `prod-debug-cluster` - build (server & client) and launch production server with **PM2**, Hot Reload (server & client), cluster mode and debug mode
- `prod-node` - build (server & client) and launch production server with **node**
- `prod-babel-node` - build (server & client) and launch production server with **babel-node**
- `stop` - remove all processes from **PM2** list
- `pm2-update` - update **PM2**
- `build-server` - build only server for production with **Babel**
- `build-client` - build only client for production with **Babel** and **Webpack**
- `build` - build both (server & client) for production with **Babel** and **Webpack**
- `remove-build` - remove build folder
- `test` - TODO
- `add-global-packages` - install needed global packages
- `add-local-packages` - install needed local packages
- `init-packages` - install needed global & local packages
- `remove-packages` - remove node_modules folder
- `clear` - remove build & node_modules folder
- `git-credentials` - store git credentials on disk
- *Remember all commands starts with __yarn__! For more information read package.json*

**Used global packages:**
- [pm2](http://pm2.keymetrics.io) - process manager
- [flow-bin](https://flowtype.org) - JavaScript type checker
- [babel-cli](http://babeljs.io) - JavaScript compiler (command line)
- *For more information read package.json*

**Used local packages:**
- [express](http://expressjs.com) - web framework for Node.js
- [react & react-dom](https://facebook.github.io/react) - UI
- [eslint](http://eslint.org) - JavaScript and JSX linter
    - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - React linter
    - [babel-eslint](https://github.com/babel/babel-eslint) - Babel linter
- [stylelint](https://stylelint.io) - CSS linter
- [babel-core](https://github.com/babel/babel/tree/master/packages/babel-core) - Babel compiler core
    - [babel-preset-latest](https://github.com/babel/babel/tree/master/packages/babel-preset-latest) - Babel preset including es2015, es2016, es2017
    - [babel-preset-flow](https://github.com/babel/babel/tree/master/packages/babel-preset-flow) - Babel preset for all Flow plugins
    - [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react) - Babel preset for all React plugins
    - [babel-preset-stage-2](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-2) - Babel preset for stage 2 plugins
- [babel-runtime](https://github.com/babel/babel/tree/master/packages/babel-runtime) - TODO
    - [babel-plugin-transform-runtime](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime) - TODO
- [webpack](https://webpack.js.org) - module bundler
    - [style-loader](https://github.com/webpack-contrib/style-loader) - style loader module for webpack
    - [css-loader](https://github.com/webpack-contrib/css-loader) - css loader module for webpack
    - [postcss-loader](https://github.com/postcss/postcss-loader) - PostCSS loader for webpack
    - [precss](https://github.com/jonathantneal/precss) - use Sass-like markup in your CSS
    - [babel-loader](https://github.com/babel/babel-loader) - webpack plugin for Babel
    - [react-hot-loader](https://github.com/gaearon/react-hot-loader) - tweak React components in real time
    - [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) - dev middleware for webpack, which arguments a live bundle to a directory
    - [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) - webpack hot reloading
- *For more information read package.json*

**[Visual Studio Code:](https://code.visualstudio.com)**
- Use this project with VS Code for best development experience
- VS Code is free, open source and runs everywhere!
- VS Code have syntax highlighting and autocomplete
- VS Code have git built-in
- VS Code have integrated terminal
- VS Code have a lot of extensions to increase your productivity
- Easily debug your app right from editor by setting breakpoints and by pressing F5