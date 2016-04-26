import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { logout } from '../actions';

class LoginArea extends Component {

  renderLoggedIn() {
    return (
      <div>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }

  renderLoggedOut() {
    return (
      <div>
        <button onClick={this.props.login}>Login</button>
      </div>
    );
  }

  render() {
    return (this.props.loggedIn)
      ? this.renderLoggedIn()
      : this.renderLoggedOut();
  }

}

LoginArea.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  login: dispatch.bind(this, push('/login')),
  logout: dispatch.bind(this, logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginArea);
