import React from 'react';
import ServiceStatus from './ServiceStatus';

const defaultProps = {
  data: [],
  childComponent: (props) => (<div>{ props.object.id }</div>),
  emptyComponent: () => (<p>No results</p>),
  parentComponent: 'div',
};

class Repeater extends React.Component {

  renderParent() {
    if (!this.props.data.length) { return <this.props.emptyComponent />; }

    return (
      <this.props.parentComponent { ...this.props }>
        { this.renderChildren() }
      </this.props.parentComponent>
    );
  }

  renderChildren() {
    return this.props.data.map((object, index) => {
      return <this.props.childComponent key={ index } object={ object } />;
    });
  }

  render() {
    const props = {
      ...this.props,
      status: this.props.status || this.props.data,
    };

    return React.createElement(ServiceStatus, props, this.renderParent());
  }

}

Repeater.defaultProps = defaultProps;

export default Repeater;
