import React from 'react';
import LiLink from '../LiLink';
import styles from '../../styles/style.css';
import CSSModules from 'react-css-modules';
import { config } from '../../../../../src';

@CSSModules(styles)
class Header extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".select2-navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="" className="navbar-brand">Relpers</a>
          </div>

          <nav className="collapse navbar-collapse select2-navbar-collapse" role="navigation">
            <ul className="nav navbar-nav">
              <LiLink to="/">Home</LiLink>
              <LiLink to="/api_docs">API DOCS</LiLink>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <a target="_blank" href={ config.repository.url }>
                  <img styleName="github_icon" src="imgs/github.png" />
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    );
  }

}

export default Header;
