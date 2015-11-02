const jsdom = require('jsdom').jsdom;

global.document = jsdom('<!doctype html><html><body></body></html>');

global.window = global.document.defaultView;

global.navigator = {
  userAgent: 'node.js',
};

for (const key in global.window) {
  if (!global.window.hasOwnProperty(key)) { continue; }
  if (key in global) { continue; }

  global[key] = global.window[key];
}
