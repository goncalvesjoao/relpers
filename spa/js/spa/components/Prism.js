import React from 'react';

class Prism extends React.Component {

  hightlight() { window.Prism.highlightElement(this.refs.code); }

  componentDidMount() { this.hightlight(); }

  componentDidUpdate() { this.hightlight(); }

  render() {
    let preClassName = 'line-numbers';

    if (this.props.noShadow) { preClassName += ' no-shadow'; }

    return (
      <pre className={ preClassName } data-bash-mode={ this.props.bashMode }>
        <code ref="code" className={ this.props.className }>
          { this.props.children }
        </code>
      </pre>
    );
  }

}

export default Prism;
