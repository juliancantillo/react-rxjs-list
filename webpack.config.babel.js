import path from 'path';
import webpack from 'webpack';

const config = {

  // Gives you sourcemaps without slowing down rebundling
  devtool: 'eval-source-map',
  entry: path.join(__dirname, 'src/main.js'),
  // entry: './client/js/main.js',
  output: {
    path: path.join(__dirname, 'dist/'),
    // path: './royalfilms/static/dist/',
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src/styles")]
  }
};

export default config;
