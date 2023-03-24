import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormInfo from './formInfo';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      displayFormInfo: false,
      name: '',
      activity: '',
      animal: '',
      story: '',
      likesIceCream: false
    }
  }

  updateName = (e) => this.setState({ name: e.target.value });
  updateActivity = (e) => this.setState({ activity: e.target.value });
  updateAnimal = (e) => this.setState({ animal: e.target.value })
  updateStory = (e) => this.setState({ story: e.target.value })
  updateLikesIceCream = (e) => this.setState({ likesIceCream: e.target.value });
  handleClose = () => this.setState({ displayFormInfo: false });

  submitForm = (e) => {
    e.preventDefault();
    this.setState({ 
      displayFormInfo: true
    });
  }

  render() {
    console.log(this.state)
    return(
      <>
      <Form onSubmit={this.submitForm}>
        <Form.Group controlId="formStudentData">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={this.updateName} name="name" type="text" placeholder="Enter Name" />
          <Form.Label>Favorite Activity</Form.Label>
          <Form.Control onChange={this.updateActivity} name="activity" type="text" placeholder="Enter Favorite Activity" />
          <Form.Text className="text-muted">
            We'll never share your personal information with anyone.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>What Kind Of Person Are You?</Form.Label>
          <Form.Control onChange={this.updateAnimal} name="animal" as="select">
            <option>Choose One</option>
            <option>Cat</option>
            <option>Dog</option>
            <option>Aligator</option>
            <option>Don't like animals</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>What Is Your Story</Form.Label>
          <Form.Control onChange={this.updateStory} name="story" as="textarea" rows={3} />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check onChange={this.updateLikesIceCream} name="checkbox" type="checkbox" label="Check if you like ice cream" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <FormInfo
        name={this.state.name}
        activity={this.state.activity}
        animal={this.state.animal}
        story={this.state.story}
        likesIceCream={this.state.likesIceCream}
        show={this.state.displayFormInfo}
        handleClose={() => this.setState({ displayFormInfo: false })}
      />

      </>
    )
  }
}

export default Main;