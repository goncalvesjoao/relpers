import React from 'react';
import { Link, History } from 'react-router';

const LiLink = React.createClass({

  mixins: [History],

  render() {
    let isActive = this.history.isActive(this.props.to, this.props.query);

    if (this.props.to === '/') {
      isActive = (window.appConfig.baseHref === location.pathname);
    }

    return (
      <li className={ isActive ? 'active' : '' }>
        <Link { ...this.props } activeClassName="active" />
      </li>
    );
  },

});

export default LiLink;
