import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../../styles/style.css';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div styleName="mainContainer">
          { this.props.children }
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
