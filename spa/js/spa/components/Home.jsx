import React from 'react';
import Prism from './Prism';
import { config } from '../../../../src';

class Home extends React.Component {

  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-md-7 text-center">
                <h1>{ config.name }</h1>
                <p className="lead">
                  { config.description }
                </p>
              </div>
              <div className="col-md-5 jumbotron-side text-center">
                <p>&nbsp;</p>
                <p>{ this.repositoryLink() }</p>
                <p><strong>Version</strong> { config.version }</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h2>Getting started:</h2>
          <Prism className="language-ruby" noShadow={ true } bashMode={ true }>
            npm install { config.name } --save
          </Prism>
          <p>or</p>
          <Prism className="language-ruby" noShadow={ true } bashMode={ true }>
              npm install git+https://git@github.com:{ config.author || '<package.json:author>' }/{ config.name || '<package.json:name>' }.git#master --save
          </Prism>
        </div>
      </div>
    );
  }

  repositoryLink() {
    const props = { href: '' };

    if (config.repository) { props.href = config.repository.url; }

    if (props.href) {
      props.href += '/releases';
      props.target = '_blank';
    } else {
      props.href = '#';
      props.onClick = (event) => {
        event.preventDefault();

        /*eslint-disable */
        alert('You might want to fill in the blanks of your repository details listed on the package.json');
        /*eslint-enable */
      };
    }

    return (
      <a { ...props } className="btn btn-success btn-lg">
        <i className="glyphicon glyphicon-download-alt"></i> Download
      </a>
    );
  }

}

export default Home;
