import { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default class Header extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <h1>{this.props.title}</h1>
        </Navbar.Brand>
      </Navbar>

    );
  }
}
