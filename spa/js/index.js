import React from 'react';
import Relpers from '../../src';
window.React = React;

// Configuring Relpers
// window.appConfig is being populated on public/index.html
// that in turn is being populated by spa/config/spa.js#appConfig entry.
Relpers.config = window.appConfig;

// Bootstraping your single page app
import ReactDom from 'react-dom';
const { routes } = require('./spa');
import { Router } from 'react-router';
import { createHistory, useBasename } from 'history';

const history = useBasename(createHistory)({
  basename: document.baseURI.substring(window.location.origin.length, document.baseURI.length - 1),
});

ReactDom.render(
  React.createElement(Router, { routes, history }),
  document.getElementById('spa')
);
