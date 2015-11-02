import React from 'react';
import Prism from '../Prism';
import { Input } from '../../../../../src';

const userWithErrors = {
  id: 1,
  firstName: 'John',
  lastName: 'Snow',
  errors: {
    firstName: ['is taken'],
  },
};

const InputExample = React.createClass({

  getInitialState() {
    return { user: { id: 1, firstName: 'John', lastName: 'Snow' } };
  },

  onChange(user) {
    this.setState({ user });
  },

  render() {
    return (
      <div>
        <Prism className="language-jsx">
          { `import { Input } from 'relpers';` }
        </Prism>

        <p>&nbsp;</p>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading clearfix'>
              <h3 className='panel-title'>Default mode</h3>
            </div>

            <div className='panel-body'>
              <Input data={ {} } type="text" />
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `const App = () => <Input data={ {} } />;`
                }
              </Prism>
            </div>
          </div>
        </section>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading clearfix'>
              <h3 className='panel-title'>Custom label and placeholder</h3>
            </div>

            <div className='panel-body'>
              <Input data={ {} } label="My field:" placeholder="write something will ya" />
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `const App = () => (
  <Input
    data={ {} }
    label="My field:"
    placeholder="write something will ya"
  />
);`
                }
              </Prism>
            </div>
          </div>
        </section>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading clearfix'>
              <h3 className='panel-title'>Associate to a data field</h3>
            </div>

            <div className='panel-body'>
              <Input data={ this.state.user } field="firstName" onChange={ this.onChange } />
              <Input data={ this.state.user } field="lastName" onChange={ this.onChange } />
              <span>{ this.state.user.firstName } { this.state.user.lastName }</span>
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `const App = React.createClass({
  getInitialState() { return { user: { id: 1, firstName: 'John', lastName: 'Snow' } }; },

  onChange(user) { this.setState({ user }); },

  render() {
    return (
      <div>
        <Input data={ this.state.user } field="firstName" onChange={ this.onChange } />
        <Input data={ this.state.user } field="lastName" onChange={ this.onChange } />
        <span>{ this.state.user.firstName } { this.state.user.lastName }</span>
      </div>
    );
  },
});`
                }
              </Prism>
            </div>
          </div>
        </section>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading clearfix'>
              <h3 className='panel-title'>Data has a field with errors</h3>
            </div>

            <div className='panel-body'>
              <Input data={ userWithErrors } field="firstName" />
              <Input data={ userWithErrors } field="lastName" />
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `class App extends React.Component {
  render() {
    const user = {
      id: 1,
      firstName: 'John',
      lastName: 'Snow',
      errors: {
        firstName: ['is taken'],
      },
    };

    return (
      <div>
        <Input data={ user } field="firstName" />
        <Input data={ user } field="lastName" />
      </div>
    );
  }
}`
                }
              </Prism>
            </div>
          </div>
        </section>

      </div>
    );
  },

});

module.exports = InputExample;
