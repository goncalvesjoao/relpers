import React from 'react';

const defaultProps = {
  data: {},
  type: 'text',
  field: '',
  onChange: () => {},
  className: 'form-control',
  wrapperClass: '',
  wrapperErrorClass: 'contains_errors',
};

class Input extends React.Component {

  onChange(event) {
    this.props.data[this.props.field] = event.target.value;

    this.props.onChange(this.props.data);
  }

  renderLabel({ field, label, labelClass }) {
    if (label === false) { return <noscript />; }

    return (
      <label htmlFor={ field } className={ labelClass }>
        { label || field.charAt(0).toUpperCase() + field.slice(1) }
      </label>
    );
  }

  renderInput() {
    return (
      <input
        { ...this.props }
        name={ this.props.field }
        value={ this.props.data[this.props.field] }
        onChange={ this.onChange.bind(this) }
      />
    );
  }

  renderErrors(errors) {
    return errors.map((error, index) => {
      return (
        <small key={ index } style={{ display: 'block' }} className="label label-danger">
          { error }
        </small>
      );
    });
  }

  render() {
    let errors = [];

    if (this.props.data && this.props.data.errors) {
      errors = (this.props.data.errors[this.props.field] || []);
    }

    const errorClass = errors.length ? this.props.wrapperErrorClass : '';

    return (
      <div className={ this.props.wrapperClass + ' ' + errorClass }>
        { this.renderLabel(this.props) }
        { this.renderInput() }
        { this.renderErrors(errors) }
      </div>
    );
  }

}

Input.defaultProps = defaultProps;

export default Input;
