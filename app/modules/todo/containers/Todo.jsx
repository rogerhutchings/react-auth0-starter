import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';


class Todo extends Component {

  constructor() {
    super();
    this.renderLoading = this.renderLoading.bind(this);
    this.renderComponents = this.renderComponents.bind(this);
  }

  renderLoading() {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  renderComponents() {
    return (
      <div>
        <Helmet title="Todos" />
        <h1>Todos</h1>
      </div>
    );
  }

  render() {
    return (false)
      ? this.renderLoading()
      : this.renderComponents();
  }

}

Todo.propTypes = {
  // loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  // loading: state.auth.loading,
});

export default connect(mapStateToProps)(Todo);
