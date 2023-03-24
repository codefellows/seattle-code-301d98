import React from 'react';
import Header from './Header.js';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'user'
    };
  }
  handleFormSubmitted = e => {
    e.preventDefault();
    console.log('submitted');
  }
  handleUsernameTyped = e => {
    // e.preventDefault();
    if(e.target.value.length > 0) {
      this.setState({
        username: e.target.value
      });
    } else {
      this.setState({
        username: 'user'
      });
    }
  }
  render() {
    return (
      <div>
        <Header potato={this.state.username}/>
        <form onSubmit={this.handleFormSubmitted}>
          <label htmlFor="name">Name</label>

          <input id="name" name="name" type="text" onInput={this.handleUsernameTyped} />
          <br />
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" name="dob" id="dob" />
          <br />
          <input type="submit" />
        </form>
        <Container>
          <Form>
            <Form.Group controlId="bootstrapName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" onInput={this.handleUsernameTyped} />
            </Form.Group>
          </Form>
        </Container>
      </div>
    )
  }
}
export default App;
