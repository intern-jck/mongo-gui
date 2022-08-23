# React App Template

# !!!!EDIT THIS DOC!!!!

based on https://github.com/intern-jck/template-yarn

## ✨ Additional Configurations

- [Sass Configuration](/bonus/sass_configuration.md)
- [Image Assets Configuration](/bonus/image_assets_configuration.md)
- [Custom Font Configuration](/bonus/custom_font_configuration.md)
- [Eslint Configuration](/bonus/eslint_configuration.md)

## Recipe

### Directory Tree

```bash
App Directory
├── package.json
├── public
│  └── index.html
├── src
│  └── index.jsx
├── webpack.config.js
└── yarn.lock
```

Template to create React apps.  Please fork or copy contents for each new project.
Uses yarn for package manager and git for version control.

### Yarn Commands

| Command  | Description  |
|----------|--------------|
| yarn init  | Initializes the development of a package/application. |
| yarn add  |  Adds a package to use in your current application. |
| yarn add global | Adds a package to globally available directory.  |
| yarn add --dev | Adds a package to your current application under the development dependencies. |
| yarn install | Installs all the dependencies defined in a package.json file. |
| yarn remove | Removes an unused package from your current package. |
| yarn [scriptname] | Runs a script defined in the package.json |

For detailed information:
[docs](https://classic.yarnpkg.com/en/docs/cli/).

### Dependancies

#### PRODUCTION

#### React Dependancies

- [React](https://www.npmjs.com/package/react) for ui component library.
- [ReactDOM](https://www.npmjs.com/package/react-dom) for connecting the ui component library to the dom.

#### DEVELOPMENT

#### Webpack Dependancies

- [webpack](https://www.npmjs.com/package/webpack) for bundling our code.
- [webpack-cli](https://www.npmjs.com/package/webpack-cli) for terminal commands around bundling our code.
- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) for hot reloading functionality.

#### Babel Dependancies

- [@babel/core](https://babeljs.io/docs/en/babel-core) for translations between js versions.
- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) for latest support of js versions along with polyfils for browser support.
- [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react) for react support that includes jsx.

#### Loader Dependancies

For hot loading with webpack-dev-server we will need to add the loaders we want to run. These are a few of the option that are available and the base options to start with.

- [babel-loader](https://www.npmjs.com/package/babel-loader) to connect babel and webpack together.
- [css-loader](https://www.npmjs.com/package/css-loader) to add support for css imports.
- [style-loader](https://www.npmjs.com/package/style-loader) to add css injections to the dom.

#### Full Commands

Just copy and paste for easy install.

```bash
yarn add react react-dom
```

```bash
yarn add --dev webpack webpack-cli webpack-dev-server @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader style-loader
```

#### Final Dependencies

Our final package.json should look something like this:

```json
"dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@babel/core": "^7.17.5",
    "@babel/preset-env": "^7.16.11",
    "@babel/preset-react": "^7.16.7",
    "babel-loader": "^8.2.3",
    "css-loader": "^6.7.1",
    "style-loader": "^3.3.1",
    "webpack": "^5.70.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.4"
  },
```

> NOTE: Your version numbers might look different since packages update over time.

#### Webpack Setup

```bash
touch webpack.config.js
```

Inside webpack.config.js:

```js
// For node to know our absolute file path we will be using the internal module path
const path = require("path");

// Our export here is the configuration webpack will use
module.exports = {
  // [mode] will determine how our code will be bundled.
  // "development" will be human readable
  // "production" will be minified
  mode: "development",
  // [entry] this is the file where the bundling starts from.
  entry: "./src/index.jsx",
  // [output] is a configuration object to determine how and where to bundle our code
  output: {
    // [path] is where to output
    path: path.join(__dirname, 'public'),
    // [filename] is the name of the file
    filename: "bundle.js"
  }
}
```

