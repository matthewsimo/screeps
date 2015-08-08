
module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './src']
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: "babel", exclude: /(node_modules|bower_components)/ },
    ]
  }
};
