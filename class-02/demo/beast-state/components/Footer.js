import { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default class Footer extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <p>{this.props.text}</p>
        </Navbar.Brand>
      </Navbar>

    );
  }
}
