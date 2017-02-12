var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

var webpackDevMiddleware = require('webpack-dev-middleware');
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

var webpackHotMiddleware = require('webpack-hot-middleware');
app.use(webpackHotMiddleware(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var port = 3001;
app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:' + port +'/');
});
