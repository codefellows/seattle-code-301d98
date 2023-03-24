// TODO: switch this over to using Auth0

import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
// const user = { name: 'sara', email: 'sara@codefellows.com' };

class Profile extends Component {

  render() {
    return <div>Hello {this.props.auth0.user.name}:{this.props.auth0.user.email}</div>;
  }
}

export default withAuth0(Profile);
