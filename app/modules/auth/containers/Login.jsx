import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { LOCK } from '../../../config';


class Login extends Component {

  constructor() {
    super();
    this.renderLoading = this.renderLoading.bind(this);
    this.renderComponents = this.renderComponents.bind(this);
  }

  componentDidMount() {
    if (this.props.nextUrl) {
      localStorage.setItem('nextUrl', this.props.nextUrl);
    }

    // We specify a callback because sometimes it picks up the wrong URL,
    // because reasons ¯\_(ツ)_/¯
    if (!this.props.loading) {
      LOCK.show({
        closable: false,
        callbackURL: window.location.origin + window.location.pathname,
        responseType: 'token',
      });
    }
  }

  componentWillUnmount() {
    LOCK.hide();
  }

  renderLoading() {
    return (
      <div>
        <Helmet title="Logging in..." />
        <div>Loading...</div>
      </div>
    );
  }

  renderComponents() {
    return (
      <div>
        <Helmet title="Login" />
        <p>Login stuff</p>
      </div>
    );
  }

  render() {
    return (this.props.loading)
      ? this.renderLoading()
      : this.renderComponents();
  }

}

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
  nextUrl: PropTypes.string,
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  nextUrl: state.routing.locationBeforeTransitions.query.nextUrl,
});

export default connect(mapStateToProps)(Login);
