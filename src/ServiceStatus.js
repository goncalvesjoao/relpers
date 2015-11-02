import React from 'react';
import Spinner from './Spinner';

const defaultProps = {
  status: { loading: false, error: null },
  spinner: Spinner,
  errorComponent: 'h1',
};

class ServiceStatus extends React.Component {

  message() {
    switch (this.httpStatus) {
    case '400': return 'Bad request';
    case '401': return 'YOU ARE NOT AUTHORIZED!';
    case '404': return 'Resource not found';
    default: return 'Service Down';
    }
  }

  noRealError() {
    const { error } = this.props.status;

    if (!error || !error.hasOwnProperty('http_status')) { return true; }

    this.httpStatus = error.http_status.toString();

    return (this.httpStatus === '409' || this.httpStatus === '422');
  }

  render() {
    const { status, children, errorComponent } = this.props;

    if (status.loading) { return <this.props.spinner />; }

    if (this.noRealError()) { return children || null; }

    return React.createElement(errorComponent, null, this.message());
  }

}

ServiceStatus.defaultProps = defaultProps;

export default ServiceStatus;
