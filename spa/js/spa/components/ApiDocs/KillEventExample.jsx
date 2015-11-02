import React from 'react';
import Prism from '../Prism';
import { killEvent } from '../../../../../src';

class DownloadButton extends React.Component {
  @killEvent
  onDownloadClick() {
    this.props.onDownloadClick();
  }

  render() {
    return <button onClick={ this.onDownloadClick.bind(this) }>click me</button>;
  }
}

class App extends React.Component {
  /*eslint-disable */
  onDownloadClick() { alert('DownloadButton as been clicked!'); }

  @killEvent
  onLinkClick() { alert('Link as been clicked!'); }
  /*eslint-enable */

  render() {
    return (
      <a href="#" onClick={ this.onLinkClick }>
        <span>Notice that your browser's url is not being updated with a's href "#" in it.</span>
        <DownloadButton onDownloadClick={ this.onDownloadClick } />
      </a>
    );
  }
}

const killEventExample = React.createClass({

  render() {
    return (

      <div>
        <Prism className="language-jsx">
          { `import { killEvent } from 'relpers';` }
        </Prism>

        <p>&nbsp;</p>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>Add it right before the method you want to stop and prevent its event</h3>
            </div>

            <div className='panel-body'>
              <App />
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `class DownloadButton extends React.Component {
  @killEvent
  onDownloadClick() { this.props.onDownloadClick(); }

  render() {
    return <button onClick={ this.onDownloadClick.bind(this) }>click me</button>;
  }
}

class App extends React.Component {
  onDownloadClick() { alert('DownloadButton as been clicked!'); }

  @killEvent
  onLinkClick() { alert('Link as been clicked!'); }

  render() {
    return (
      <a href="#" onClick={ this.onLinkClick }>
        <span>Notice that your browser's URL is not being updated with "#" in it.</span>
        <DownloadButton onDownloadClick={ this.onDownloadClick } />
      </a>
    );
  }
}` }
              </Prism>
            </div>
          </div>
        </section>
      </div>

    );
  },

});

module.exports = killEventExample;
