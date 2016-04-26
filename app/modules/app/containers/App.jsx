import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Footer from '../components/Footer';
import Header from '../components/Header';
import HelmetConfig from '../components/HelmetConfig';


class App extends Component {

  constructor() {
    super();
    this.renderLoading = this.renderLoading.bind(this);
    this.renderComponents = this.renderComponents.bind(this);
  }

  renderComponents() {
    return (
      <div>
        <HelmetConfig />
        <Header />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }

  renderLoading() {
    return (
      <div>Loading...</div>
    );
  }

  render() {
    return (this.props.loading)
      ? this.renderLoading()
      : this.renderComponents();
  }

}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(App);
