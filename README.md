# React Boilerplate (still need to finish)

**Features:**
- Node.js for back-end and React for front-end
- Made structure which fits small, medium or large project
- Includes a lot of ready to use commands for better development and production
- Configured ESLint and stylelint for better code analysis
- Hot Reload (server & client), forget about F5!
- Ready for development and production!

**Before starting:**
- Install -> [Node.js](https://nodejs.org/en/download)
- Install -> [Yarn](https://yarnpkg.com/en/docs/install)
- Clone project with git -> `git clone https://github.com/svipben/react-boilerplate.git`
- Install all needed packages -> `yarn init-packages`
- Launch development server -> `yarn dev`
- That's it, you're ready to develop apps faster than ever before!

**Commands:**
- `dev` - launch development server with Hot Reload (server & client) and debug enabled (port 5858)
- `dev-cluster` - launch development server with Hot Reload (server & client), cluster mode and debug enabled (port 5858)
- `dev-babel-node` - launch development server with Hot Reload (client only) and debug enabled (port 5858)
- `prod` - launch production server with pm2
- `prod-cluster` - launch production server with cluster mode
- `prod-debug` - launch production server with Hot Reload (server & client) and debug enabled (port 5858)
- `prod-debug-cluster` - launch production server with Hot Reload (server & client), cluster mode and debug enabled (port 5858)
- `prod-node` - launch production server with node
- `prod-babel-node` - launch production server with babel-node
- `stop` - remove all processes from pm2 list
- `pm2-show-logs` - display all pm2 logs
- `pm2-clear-logs` - empty all pm2 logs
- `pm2-list` - display all pm2 processes status
- `pm2-monit` - monitor all pm2 processes
- `pm2-update` - update pm2
- `build-server` - build server for production
- `build-client` - build client for production
- `remove-build` - remove build folder
- `test` - TODO
- `add-global-packages` - install needed global packages
- `init-packages` - install needed global & local packages
- `remove-packages` - remove node_modules folder
- `clear` - remove build & node_modules folder
- `git-credentials` - store git credentials on disk
- *Remember all commands starts with __yarn__! For more information read package.json*

**Used global packages:**
- [PM2](http://pm2.keymetrics.io) - process manager
- [Flow](https://flowtype.org) - JavaScript type checker
- [Babel](http://babeljs.io) - JavaScript compiler
- *For more information read package.json*

**Used local packages:**
- [Express](http://expressjs.com/) - web framework for Node.js
- [React](https://facebook.github.io/react) - UI
- [ESLint](http://eslint.org) - JavaScript and JSX linter
- [stylelint](https://stylelint.io) - CSS linter
- [Babel](http://babeljs.io) - JavaScript compiler
- [Webpack](https://webpack.js.org) - module bundler
- *For more information read package.json*

**[Visual Studio Code](https://code.visualstudio.com):**
- Use this project with VS Code for best development experience
- VS Code is free, open source and runs everywhere!
- VS Code have syntax highlighting and autocomplete
- VS Code have git built-in
- VS Code have integrated terminal
- VS Code have a lot of extensions to increase your productivity
- Easily debug your app right from editor by setting breakpoints and by pressing F5