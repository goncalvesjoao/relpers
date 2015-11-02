import React from 'react';
import Prism from '../Prism';
import { injectProps } from '../../../../../src';

class Profile1 extends React.Component {
  @injectProps
  render({ firstName, lastName, email }) {
    return <p>{ firstName } { lastName } - { email }</p>;
  }
}

class Profile2 extends React.Component {
  @injectProps
  fullName(seperator, { firstName, lastName }) {
    return lastName + seperator + firstName;
  }

  @injectProps
  render({ email }) {
    return <p>{ this.fullName(', ') } - { email }</p>;
  }
}

class Profile3 extends React.Component {
  fullName(seperator, firstName, lastName) {
    return firstName + seperator + lastName;
  }

  @injectProps
  render({ firstName, lastName, email }) {
    return <p>{ this.fullName(', ', firstName, lastName) } - { email }</p>;
  }
}

const InjectPropsExample = React.createClass({

  render() {
    return (

      <div>
        <Prism className="language-jsx">
          { `import { injectProps } from 'relpers';` }
        </Prism>

        <p>&nbsp;</p>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>Add it right before the method you want to inject your props into</h3>
            </div>

            <div className='panel-body'>
              <Profile1 firstName="John" lastName="Snow" email="john.snow@gmail.com" />
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `class Profile extends React.Component {

  @injectProps
  render({ firstName, lastName, email }) {
    return <p>{ firstName } { lastName } - { email }</p>;
  }

}

<Profile firstName="John" lastName="Snow" email="john.snow@gmail.com" />` }
              </Prism>
            </div>
          </div>
        </section>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>Works also, with methods that receive arguments</h3>
            </div>

            <div className='panel-body'>
              <Profile2 firstName="John" lastName="Snow" email="john.snow@gmail.com" />
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `class Profile extends React.Component {
  @injectProps
  fullName(seperator, { firstName, lastName }) {
    return firstName + seperator + lastName;
  }

  @injectProps
  render({ email }) {
    return <p>{ this.fullName(', ') } - { email }</p>;
  }
}

<Profile firstName="John" lastName="Snow" email="john.snow@gmail.com" />` }
              </Prism>
            </div>
          </div>
        </section>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>No need to overuse it: Use it on your render method and pass the necessary props as arguments.</h3>
            </div>

            <div className='panel-body'>
              <Profile3 firstName="John" lastName="Snow" email="john.snow@gmail.com" />
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `class Profile extends React.Component {
  fullName(seperator, firstName, lastName) {
    return firstName + seperator + lastName;
  }

  @injectProps
  render({ firstName, lastName, email }) {
    return <p>{ this.fullName(', ', firstName, lastName) } - { email }</p>;
  }
}

<Profile firstName="John" lastName="Snow" email="john.snow@gmail.com" />` }
              </Prism>
            </div>
          </div>
        </section>
      </div>

    );
  },

});

module.exports = InjectPropsExample;
