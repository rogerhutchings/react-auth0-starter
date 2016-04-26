import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export default ComposedClass => {
  class AuthenticationCheck extends Component {

    constructor() {
      super();
      this.isLoading = this.isLoading.bind(this);
      this.isNotLoggedIn = this.isNotLoggedIn.bind(this);
      this.isLoggedIn = this.isLoggedIn.bind(this);
    }

    componentWillMount() {
      return (!this.props.auth.loading && !this.props.auth.loggedIn)
        ? this.isNotLoggedIn()
        : null;
    }

    isLoading() {
      return (<div>Loading...</div>);
    }

    isNotLoggedIn() {
      this.props.loginRedirect(window.location.pathname);
    }

    isLoggedIn() {
      return (<ComposedClass {...this.props} />);
    }

    render() {
      return (this.props.auth.loading)
        ? this.isLoading()
        : this.isLoggedIn();
    }

  }

  AuthenticationCheck.propTypes = {
    loginRedirect: PropTypes.func.isRequired,
    auth: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      loggedIn: PropTypes.bool.isRequired,
    }),
  };

  const mapStateToProps = state => ({
    auth: state.auth,
  });

  const mapDispatchToProps = dispatch => ({
    loginRedirect: nextUrl => dispatch(push({
      pathname: '/login',
      query: { nextUrl },
    })),
  });

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticationCheck);
};
