import React from 'react';
import LiLink from '../LiLink';
import { History } from 'react-router';

const ApiDocs = React.createClass({

  mixins: [History],

  render() {
    return (
      <div id="top">
        <p>&nbsp;</p>

        <div className="container">
          <div className="row">
            <div className="col-xs-3 ascii">
              { this.renderSidebar() }
            </div>

            <div className="col-md-9">
              { this.props.children || this.renderHome() }
            </div>
          </div>
        </div>

      </div>
    );
  },

  renderHome() {
    return (
      <div className="jumbotron">
        <h1>Relpers API</h1>
        <h2 className="lead">
          This API documentation example page,
          ilustrates how you can take advantage of this Single Page App
          created for you to test your React Component and
          actually use it to document your work and publish it on the Web.
        </h2>
      </div>
    );
  },

  renderSidebar() {
    return (
      <ul className="ascii fixed">
        <li>
          <span>Relpers</span>
          <ul>
            <LiLink to="/api_docs/form">Form</LiLink>
            <LiLink to="/api_docs/input">Input</LiLink>
            <LiLink to="/api_docs/spinner">Spinner</LiLink>
            <LiLink to="/api_docs/repeater">Repeater</LiLink>
            <LiLink to="/api_docs/kill_event">killEvent</LiLink>
            <LiLink to="/api_docs/inject_props">injectProps</LiLink>
            <LiLink to="/api_docs/service_status">ServiceStatus</LiLink>
          </ul>
        </li>
      </ul>
    );
  },

});

module.exports = ApiDocs;
