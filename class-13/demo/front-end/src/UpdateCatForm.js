import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

class UpdateCatForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.cat?._id,
      name: this.props.cat?.name,
      color: this.props.cat?.color,
      hasClaws: this.props.cat?.hasClaws,
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.onUpdate(this.state);
    this.handleClose();
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

  handleClose = () => {
    this.props.onClose();
  }


  render() {
    return (
      <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update a Kitty</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={this.handleSubmit} className="p-4">
            <Form.Label>
              <h2>
                Update a Cat
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
              <Form.Check type="checkbox" label="Has Claws" onChange={this.handleClawChange} checked={this.state.hasClaws} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default UpdateCatForm;
