var webpack = require('webpack');

module.exports = {
    entry: {
      dev: 'webpack/hot/only-dev-server',
      javascript: "./app/js/app.jsx",
      html: "./app/index.html"
    },
    output: {
        path: __dirname + '/static',
        filename: "bundle.js",
        publicPath: "/static/"
    },
    debug:true,
    devtool: 'inline-source-map',

    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot-loader/webpack', 'babel'], exclude: /node_modules/ },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader',
            query:
              {
                presets:['react','es2015']
              }
          },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      })
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: './app/'
    }

};
