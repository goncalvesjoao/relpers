import React from 'react';
import LiLink from '../LiLink';
import { History } from 'react-router';

const ApiDocs = React.createClass({

  mixins: [History],

  renderHome() {
    return (
      <div className="jumbotron">
        <h1>Relpers API</h1>
        <h2 className="lead">
          Relpers exports an object as its default export, the sidebar on the left ilustrates that object's keys.
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
            <LiLink to="/api_docs/kill_event">killEvent</LiLink>
            <LiLink to="/api_docs/apply_mixin">applyMixin</LiLink>
            <LiLink to="/api_docs/inject_props">injectProps</LiLink>
          </ul>
        </li>
      </ul>
    );
  },

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

});

module.exports = ApiDocs;
