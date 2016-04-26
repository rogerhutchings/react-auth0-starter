import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Home extends Component {

  constructor() {
    super();
    this.renderComponents = this.renderComponents.bind(this);
  }

  renderComponents() {
    return (
      <div>
        <Helmet title="Wedding planning just got a bit easier" />
        <h1>Home</h1>
      </div>
    );
  }

  render() {
    return this.renderComponents();
  }

}

export default Home;
