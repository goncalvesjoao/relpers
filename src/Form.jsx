import React from 'react';
import Spinner from './Spinner';
import ServiceStatus from './ServiceStatus';

class Form extends React.Component {

  renderChildren() {
    if (this.props.data.loading) { return <Spinner />; }

    const props = {
      data: this.props.data,
      onChange: this.props.onChange,
    };

    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, props);
    });
  }

  onSubmit(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        { this.renderChildren() }
        <ServiceStatus
          error={ this.props.data.error }
          className="label label-danger"
          errorComponent="span"
        />
      </form>
    );
  }

}

export default Form;
