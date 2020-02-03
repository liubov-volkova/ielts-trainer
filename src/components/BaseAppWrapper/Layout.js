import React, { Component } from 'react';
import { Container } from 'reactstrap';

import MainNavMenu from '../MainNavMenu/MainNavMenu';
class BaseAppWrapper extends Component {
  static displayName = BaseAppWrapper.name;

  render () {
    return (
      <div className="m-0">
        <MainNavMenu />
        <Container>
          {this.props.children}
        </Container>

      </div>
    );
  }
}
export default BaseAppWrapper;