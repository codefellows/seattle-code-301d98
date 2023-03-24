import axios from "axios";
import React from "react";
import "./App.css";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SERVER = 'http://localhost:3001';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snacks: []
    }
  }

  componentDidMount() {
    this.getSnacks();
  }

  async getSnacks() {
    try {
      const response = await axios.get(`${SERVER}/snacks`);
      console.log("get all the snacks: ", response.data)
      this.setState({ snacks: response.data});
    } catch(error) {
      console.error(error);
    }
  }

  async createSnack(snackInfo) {
    try {
      const response = await axios.post(`${SERVER}/snacks`, snackInfo);
      console.log("create a snack: ", response.data);
      this.setState({ snacks: [...this.state.snacks, response.data]});
    } catch(error) {
      console.error(error);
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.snackName.value);
    const snackInfo = {
      name: event.target.snackName.value,
      description: event.target.snackDescription.value
    }
    console.log(snackInfo);
    this.createSnack(snackInfo);
    this.getSnacks();
  }

  async deleteSnack(id) {
    try {
      const response = await axios.delete(`${SERVER}/snacks/${id}`);
      console.log(response.data);
      this.getSnacks();
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.handleSubmit}>
          <Form.Label>Create a Snack</Form.Label>
          <Form.Group controlId="snackName">
            <Form.Control type="text" placeholder="snack name"  />
          </Form.Group>
          <Form.Group controlId="snackDescription">
            <Form.Control type="text" placeholder="snack description" />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
        {this.state.snacks.map(snack => (
          <Card key={snack._id} style={{ width:'18rem' }}>
          <Card.Body>
            <Card.Title>{snack.name}</Card.Title>
            <Card.Text>{snack.description}</Card.Text>
            <Button onClick={() => this.deleteSnack(snack._id)}>Eat this snack!</Button>
          </Card.Body>
          </Card>
        ))};
      </div>
    );
  }
}

export default App;
