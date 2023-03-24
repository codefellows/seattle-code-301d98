import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.potato}!</h1>
    )
  }
}

export default Header;
