const path = require('path');

module.exports = {
  context: path.join(__dirname, "/app"), // __dirname + "/app",

  debug:true,
  resolve: {
    extensions:  [
      "", ".webpack.js", ".web.js", ".js", ".jsx"
    ]
  },

  entry: {
    javascript: "./app.jsx",
    html: "./index.html",
  },

  output: {
    path: path.join(__dirname, "/dist"), //__dirname + "/dist",
    filename: "app.js"
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',

      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      { test: /\.css$/,
        loader: "style!css"
      }
    ]
  }
};
