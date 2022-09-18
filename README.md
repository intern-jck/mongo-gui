# React App Template with NPM Package Manager

## Recipe

```bash
git init
touch .gitignore README.md
```

.gitignore

```bash
node_modules/
```

```bash
npm init -y
```

Webpack
Add css-loader to allow use of CSS style sheets

```bash
npm i --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader
```

Babel

```bash
npm i --save-dev babel-loader @babel/preset-env @babel/core @babel/plugin-transform-runtime @babel/preset-react @babel/eslint-parser @babel/runtime @babel/cli
```

Linters

```bash
npm i --save-dev eslint eslint-config-airbnb-base eslint-plugin-jest eslint-config-prettier path
```

React

```bash
npm i react react-dom
```

Create public folder and initial files

```bash
mkdir public src
touch public/index.html src/index.jsx src/index.css src/App.jsx src/App.css
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webpack React</title>
</head>
<body>
    <div id="root"></div>
    <script src="main.js"></script> <!-- The output file of webpack config-->
</body>
</html>
```

index.jsx

```jsx
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);
```

index.css

```css
  /* I'd use index.css for page wide styling, global vars, etc. */
body {
  margin: 0;
  font-size: 100%;
}
```

App.jsx

```jsx
import React from 'react';
import 'App.css';

const App = () =>{
    return (
      <div className='App'>
        <h1>
          React App with NPM
        </h1>
      </div>
    )
}

export default App;
```

App.css

```css
  /* I'd use App.css for app wide styling like layout of top level components. */
.App {
  border: 4px solid black;
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

Create Babel and WebPack config files

```bash
touch webpack.config.js babel.rc
```

webpack.config.js

```js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
  },
};
```

add all to git repo

```bash
git branch -M main
git add .
git commit -m 'first commit'
```

If you create a new repoe on GitHub, be sure to NOT create a readme or a gitignore file.
It just complicates things during your first push.
Make sure to add the origin of the new repo to this repo

```bash
git add origin https://github.com/["GITHUB_USER_NAME"]/["GITHUB_REPO_NAME"]
git push origin main
```

run dev

```bash
npm run dev
```

ENJOY!!!
