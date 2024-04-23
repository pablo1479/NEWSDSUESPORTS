import React, { Component } from 'react';
import Responsiveappbar from './responsiveappbar';  // Make sure this path is correct

class Layout extends Component {
  render() {
    return (
      <>
        <Responsiveappbar />
        <div>{this.props.children}</div>
      </>
    );
  }
}

export default Layout;
