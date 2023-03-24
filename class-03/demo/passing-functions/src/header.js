import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <h1>
            {this.props.title}
          </h1>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
