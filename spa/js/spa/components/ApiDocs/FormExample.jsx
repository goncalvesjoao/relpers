import React from 'react';
import Prism from '../Prism';
import { Form, Input } from '../../../../../src';

const FormExample = React.createClass({

  getInitialState() {
    return {
      user: {
        id: 1,
        firstName: 'John',
        lastName: 'Snow',
        errors: {
          firstName: ['is taken'],
        },
      },
    };
  },

  onChange(user) {
    this.setState({ user });
  },

  render() {
    return (
      <div>
        <Prism className="language-jsx">
          { `import { Form } from 'relpers';` }
        </Prism>

        <p>&nbsp;</p>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading clearfix'>
              <h3 className='panel-title'>"data" and "onChange" props are propagated to its children</h3>
            </div>

            <div className='panel-body'>
              <Form data={ this.state.user } onChange={ this.onChange }>
                <Input field="firstName" />
                <Input field="lastName" />
                <span>{ this.state.user.firstName } { this.state.user.lastName }</span>
              </Form>
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `const App = React.createClass({
  getInitialState() {
    return {
      user: {
        id: 1,
        firstName: 'John',
        lastName: 'Snow',
        errors: {
          firstName: ['is taken'],
        },
      },
    };
  },

  onChange(user) { this.setState({ user }); },

  render() {
    return (
      <Form data={ this.state.user } onChange={ this.onChange }>
        <Input field="firstName" />
        <Input field="lastName" />
        <span>{ this.state.user.firstName } { this.state.user.lastName }</span>
      </Form>
    );
  },
});`
                }
              </Prism>
            </div>
          </div>
        </section>

      </div>
    );
  },

});

module.exports = FormExample;
