
module.exports = {
  entry: {
    app: ['./src']
  },
  output: {
    path: './dist',
    filename: 'main.js',
    libraryTarget: "commonjs2"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: "babel", exclude: /(node_modules|bower_components)/ },
    ]
  }
};
