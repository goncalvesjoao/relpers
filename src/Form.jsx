import React from 'react';
import Spinner from './Spinner';
import killEvent from './killEvent';
import injectProps from './injectProps';
import ServiceStatus from './ServiceStatus';

class Form extends React.Component {

  renderChildren(data, onChange) {
    if (data.loading) { return <Spinner />; }

    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { data, onChange });
    });
  }

  @killEvent
  onSubmit(callback) { callback(); }

  @injectProps
  render({ data, onChange, onSubmit }) {
    return (
      <form onSubmit={ this.onSubmit.bind(this, onSubmit) }>
        { this.renderChildren(data, onChange) }
        <ServiceStatus
          error={ data.error }
          className="label label-danger"
          errorComponent="span"
        />
      </form>
    );
  }

}

export default Form;
