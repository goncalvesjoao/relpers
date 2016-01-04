import React from 'react';
import Prism from '../Prism';
import { History } from 'react-router';
import { applyMixin } from '../../../../../src';

@applyMixin(History)
class Link extends React.Component {
  onLinkClick(href) {
    this.history.pushState(null, href);
  }

  render() {
    return (
      <button onClick={ () => this.onLinkClick(this.props.href) }>
        { this.props.children }
      </button>
    );
  }
}

const killEventExample = React.createClass({

  render() {
    return (

      <div>
        <Prism className="language-jsx">
          { `import { applyMixin } from 'relpers';` }
        </Prism>

        <p>&nbsp;</p>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>Default mode</h3>
            </div>

            <div className='panel-body'>
              <Link href="/">go to home</Link>
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `import { History } from 'react-router';

@applyMixin(History)
class Link extends React.Component {
  onLinkClick(href) {
    this.history.pushState(null, href);
  }

  render() {
    return (
      <button onClick={ () => this.onLinkClick(this.props.href) }>
        { this.props.children }
      </button>
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
