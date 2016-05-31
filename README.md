## The proyect

Use ReactJS and RxJS for a list listening for arrow keys for select an item.

The component holds the event listening using streams with an observer from RxJS.

## Step 1

Install the libraries we are going to need:

```
# React and RxJS
npm i react rxjs -S

# Webpack for workflow opt
npm i webpack -D

# For ES6 transpiling
npm i babel-core babel-loader -D

# For ES6/ES2015 support
npm install babel-preset-es2015 -D

# If you want to use JSX
npm install babel-preset-react -D

# If you want to use experimental ES7 features
npm install babel-preset-stage-0 -D
```

## Step 2

Config Babel, we can do it using the .babelrc file in the root of your directory, and indicate the
stage of JavaScript the project could use.

```
{
  "presets": ["es2015", "react"]
}
```

## Step 3

Add Style support for webpack

```
npm i css-loader node-sass sass-loader style-loader -D
```
