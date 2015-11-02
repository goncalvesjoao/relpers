import React from 'react';
import Prism from '../Prism';
import { Spinner } from '../../../../../src';

const SpinnerExample = React.createClass({

  defaultData() {
    return [{ id: 1, name: '1' }, { id: 2, name: '2' }];
  },

  render() {
    return (

      <div>
        <Prism className="language-jsx">
          { `import { Spinner } from 'relpers';` }
        </Prism>

        <p>&nbsp;</p>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>Default mode</h3>
            </div>

            <div className='panel-body'>
              <Spinner />
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                { `<Spinner />` }
              </Prism>
            </div>
          </div>
        </section>
      </div>

    );
  },

});

module.exports = SpinnerExample;
