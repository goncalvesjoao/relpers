import React from 'react';
import Prism from '../Prism';
import { ServiceStatus } from '../../../../../src';

const loadingData = [];
loadingData.loading = true;

const failedData = [];
failedData.error = { http_status: 401 };

const ServiceStatusExample = React.createClass({

  defaultData() {
    return [{ id: 1, name: '1' }, { id: 2, name: '2' }];
  },

  render() {
    return (

      <div>
        <Prism className="language-jsx">
          { `import { ServiceStatus } from 'relpers';` }
        </Prism>

        <p>&nbsp;</p>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>Default mode</h3>
            </div>

            <div className='panel-body'>
              !<ServiceStatus />!
              <br/>
              !<ServiceStatus>
                <p>Hello</p>
                <p>world</p>
              </ServiceStatus>!
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `class App extends React.Component {
  render() {
    return (
      <div>
        !<ServiceStatus />!
        <br/>
        !<ServiceStatus>
          <p>Hello</p>
          <p>world</p>
        </ServiceStatus>!
      </div>
    );
  }
}`
                }
              </Prism>
            </div>
          </div>
        </section>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>if your data array is being updated on a remote request</h3>
            </div>

            <div className='panel-body'>
              <ServiceStatus status={ loadingData }><span>Hello world</span></ServiceStatus>
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
              {
                `class App extends React.Component {
  render() {
    const loadingData = [];
    loadingData.loading = true;

    return <ServiceStatus status={ loadingData }><span>Hello world</span></ServiceStatus>;
  }
}`
              }
              </Prism>
            </div>
          </div>
        </section>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>if your data array came from a remote request and has errors</h3>
            </div>

            <div className='panel-body'>
              <ServiceStatus status={ failedData }><span>Hello world</span></ServiceStatus>
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
              {
                `class App extends React.Component {
  render() {
    const failedData = [];
    failedData.error = { http_status: 401 };

    return <ServiceStatus status={ failedData }><span>Hello world</span></ServiceStatus>;
  }
}`
              }
              </Prism>
            </div>
          </div>
        </section>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>Using ServiceStatus has a label or a span</h3>
            </div>

            <div className='panel-body'>
              <ServiceStatus errorComponent={ 'div' } status={ failedData } />
              <br/>
              <ServiceStatus errorComponent={ 'span' } status={ failedData } />
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `<ServiceStatus errorComponent={ 'div' } status={ failedData } />
<ServiceStatus errorComponent={ 'span' } status={ failedData } />`
                }
              </Prism>
            </div>
          </div>
        </section>
      </div>

    );
  },

});

module.exports = ServiceStatusExample;
