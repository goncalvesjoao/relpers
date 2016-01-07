import React from 'react';
import Prism from '../Prism';
import { History } from 'react-router';
import { applyMixin } from '../../../../../src';

@applyMixin(History)
class GoHomeLink1 extends React.Component {
  onLinkClick(href) {
    this.history.pushState(null, href);
  }

  render() {
    return (
      <button onClick={ () => this.onLinkClick('/') }>
        Go Home
      </button>
    );
  }
}

const RenderTextMixin = {
  renderText() {
    return 'Go home';
  },
};

@applyMixin(History, RenderTextMixin)
class GoHomeLink2 extends React.Component {
  onLinkClick(href) {
    this.history.pushState(null, href);
  }

  render() {
    return (
      <button onClick={ () => this.onLinkClick('/') }>
        { this.renderText() }
      </button>
    );
  }
}

@applyMixin(History, RenderTextMixin)
class GoHomeLink3 extends React.Component {
  onLinkClick(href) {
    this.history.pushState(null, href);
  }

  renderText() {
    return 'Go home dad';
  }

  render() {
    return (
      <button onClick={ () => this.onLinkClick('/') }>
        { this.renderText() }
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
              <GoHomeLink1 />
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `import { History } from 'react-router';

@applyMixin(History)
class GoHomeLink1 extends React.Component {
  onLinkClick(href) {
    this.history.pushState(null, href);
  }

  render() {
    return (
      <button onClick={ () => this.onLinkClick('/') }>
        Go Home
      </button>
    );
  }
}` }
              </Prism>
            </div>
          </div>
        </section>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>It also accepts mutilple mixins</h3>
            </div>

            <div className='panel-body'>
              <GoHomeLink2 />
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `import { History } from 'react-router';

const RenderTextMixin = {
  renderText() {
    return 'Go home';
  }
}

@applyMixin(History, RenderTextMixin)
class GoHomeLink2 extends React.Component {
  onLinkClick(href) {
    this.history.pushState(null, href);
  }

  render() {
    return (
      <button onClick={ () => this.onLinkClick('/') }>
        { this.renderText() }
      </button>
    );
  }
}` }
              </Prism>
            </div>
          </div>
        </section>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>Component's attributes have precendence over the mixins'</h3>
            </div>

            <div className='panel-body'>
              <GoHomeLink3 />
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `import { History } from 'react-router';

const RenderTextMixin = {
  renderText() {
    return 'Go home';
  }
}

@applyMixin(History, RenderTextMixin)
class GoHomeLink3 extends React.Component {
  onLinkClick(href) {
    this.history.pushState(null, href);
  }

  renderText() {
    return 'Go home dad';
  }

  render() {
    return (
      <button onClick={ () => this.onLinkClick('/') }>
        { this.renderText() }
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
