/* eslint-disable */
var fs = require('fs');
var babelrc = fs.readFileSync('./.babelrc');
var babelrcObject = {};

try {
  babelrcObject = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

var babelrcObjectDevelopment = babelrcObject.env && babelrcObject.env.development || {};

var combinedPlugins = babelrcObject.plugins || [];
combinedPlugins = combinedPlugins.concat(babelrcObjectDevelopment.plugins);

var babelLoaderQuery = Object.assign({}, babelrcObjectDevelopment, babelrcObject, {plugins: combinedPlugins});
delete babelLoaderQuery.env;

babelLoaderQuery.plugins = babelLoaderQuery.plugins || [];
var reactTransform = null;
for (var i = 0; i < babelLoaderQuery.plugins.length; ++i) {
  var plugin = babelLoaderQuery.plugins[i];
  if (Array.isArray(plugin) && plugin[0] === 'react-transform') {
    reactTransform = plugin;
  }
}

if (!reactTransform) {
  reactTransform = ['react-transform', {transforms: []}];
  babelLoaderQuery.plugins.push(reactTransform);
}

if (!reactTransform[1] || !reactTransform[1].transforms) {
  reactTransform[1] = Object.assign({}, reactTransform[1], {transforms: []});
}

reactTransform[1].transforms.push({
  transform: 'react-transform-hmr',
  imports: ['react'],
  locals: ['module']
});

module.exports = babelLoaderQuery
/* eslint-enable */
