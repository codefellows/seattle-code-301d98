import React from 'react';
import BestBooks from './BestBooks';
import LoginButton from './Login';
import LogoutButton from './Logout';
import Profile from './Profile';
import { withAuth0 } from "@auth0/auth0-react";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Can of Books - Auth Demo</h1>
        {
          this.props.auth0.isAuthenticated ?
            <>
              <Profile />
              <BestBooks />
              <LogoutButton />
            </>
          :
          <LoginButton />
        }
      </>
    )
  }
}
export default withAuth0(App);
