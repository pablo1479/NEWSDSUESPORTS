import React, { Component } from 'react';
import Responsiveappbar from './responsiveappbar';  
import Footer from './Footer'; 

class Layout extends Component {
  render() {
    return (
      <>
        <Responsiveappbar />
        <div>{this.props.children}</div>
        <Footer />  

      </>
    );
  }
}

export default Layout;
