var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

config.entry.main.unshift('webpack-dev-server/client?http://localhost:4000/', 'webpack/hot/dev-server');
config.plugins.push(new webpack.HotModuleReplacementPlugin())

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
}).listen(4000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:4000/');
});