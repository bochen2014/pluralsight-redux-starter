// This file is written in ES5 since it's not transpiled by Babel.
// This file does the following:
// 1. Sets Node environment variable
// 2. Registers babel for transpiling our code for testing  => replaced with mocha --compilers option
// 3. Disables Webpack-specific features that Mocha doesn't understand.
// 4. Requires jsdom so we can test via an in-memory DOM in Node
// 5. Sets up global vars that mimic a browser.

/* eslint-disable no-var*/
//either set via package.json using cross-env NODE_ENV='production'
//or set via code 
//must set to production to suppresss proType validation warnings
process.env.NODE_ENV = 'production'  //process.env.NODE_ENV !== 'production' ? warning(false, 'Failed propType: %s%s') : void 0;

// Register babel so that it will transpile ES6 to ES5
// before our tests run.
//require('babel-register')();  => replaced with mocha --compilers option

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = function () {return null;};
require.extensions['.png'] = function () {return null;};
require.extensions['.jpg'] = function () {return null;};

import { jsdom } from 'jsdom'

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.navigator = global.window.navigator
