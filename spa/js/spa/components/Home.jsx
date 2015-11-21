import Prism from './Prism';
import { config } from '../../../../src';

const Home = () => (
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
            <p>
              <a target="_blank" href={ config.repository.url + '/releases' } className="btn btn-success btn-lg">
                <i className="glyphicon glyphicon-download-alt"></i>
                Download
              </a>
            </p>
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
    </div>
  </div>
);

export default Home;
