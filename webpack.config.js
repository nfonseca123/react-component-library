const path = require('path');

module.exports = {
  entry: './src/index.ts', // Your entry file (adjust as needed)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      // Handle TypeScript files
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Handle JavaScript files with Babel (if using Babel)
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      // Handle CSS files (for styled-components)
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'production', // or 'development' based on your needs
};
