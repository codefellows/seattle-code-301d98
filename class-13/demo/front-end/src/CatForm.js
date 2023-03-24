import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CatForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: '',
      hasClaws: false,
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.onCreate(this.state);
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleColorChange = event => {
    this.setState({ color: event.target.value });
  };

  handleClawChange = event => {
    this.setState({ hasClaws: event.target.checked });
  };


  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="p-4">
        <Form.Label>
          <h2>
            Create a Cat
          </h2>
        </Form.Label>
        <Form.Group className="mb-3">
          <Form.Label>Cat Name</Form.Label>
          <Form.Control type="text" placeholder="Cat Name" onChange={this.handleNameChange} value={this.state.name} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cat Color</Form.Label>
          <Form.Control type="text" placeholder="Cat Color" onChange={this.handleColorChange} value={this.state.color} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Has Claws" onChange={this.handleClawChange} value={this.state.hasClaws} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default CatForm;
