import React from 'react';
import './App.css';
import axios from 'axios';
import Cats from './Cats';
import { Container, Form, Button } from 'react-bootstrap'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    }
  }

  getCats = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/cats`

      let urlData = await axios.get(url);

      this.setState({
        cats: urlData.data
      })

    } catch (error) {
      console.log(error.message);
    }
  }


  // *** ADDING A CAT VIA 2 HANDLERS ****

  // *** 1ST HANDLER - GRAB FORM DATA AND BUILD OUT A CAT OBJECT  - RUN ON FORM SUBMISSION***
  handleCatSubmit = (event) => {
    event.preventDefault();

    // TODO: CONSTRUCT A CAT OBJ BASED ON THE FORM INPUT VALUES
    let catObj = {
      name: event.target.name.value,
      location: event.target.location.value,
      color: event.target.color.value,
      spayNeuter: event.target.spayNeuter.checked
    };

    // console.log(catObj);
    // TODO: SEND THIS OBJECT TO MY BACKEND - USE A 2nd HANDLER 
    this.postCat(catObj);
  }

  postCat = async (catObj) => {
    try {
      // TODO: build my url for axios -> http://localhost:3001/cats
      let url = `${process.env.REACT_APP_SERVER}/cats`

      // TODO: pass the url and the cat data into axios on a POST and store that return in a variable
      let postCats = await axios.post(url, catObj);

      // TODO: Update state with that newly created cat
      this.setState({
        cats: [...this.state.cats, postCats.data]
      });

      // this.getCats()

    } catch (error) {
      console.log(error.message);
    }
  }

  // *** HANDLER TO DELETE CAT ****
  deleteCat = async (catID) => {
    try {
      // TODO: Build out the url for axios -> http://localhost:3001/cats/64481c6eaaa56c3a62ca80e5

      let url = `${process.env.REACT_APP_SERVER}/cats/${catID}`
      console.log('url in delete', url);
      // TODO: pass that URL into axios on a DELETE
      await axios.delete(url);

      // TODO: update state -> Filter out the cat with the matching ID That is going to be deleted. We are going to look at each cat in state and if the id of that cat does not match the one to be deleted, it gets put into the array called updatedCats
      let updatedCats = this.state.cats.filter(cat => cat._id !== catID)

      this.setState({
        cats: updatedCats
      })

    } catch (error) {
      console.log(error.message)
    }
  }

  componentDidMount() {
    this.getCats();
  }

  render() {
    // console.log('App State >>> ', this.state);
    return (
      <>
        <header>
          <h1>Cool Cats</h1>
        </header>
        <main>
          {
            this.state.cats.length > 0 &&
            <>
              <Cats
                cats={this.state.cats}
                deleteCat={this.deleteCat}
              />
            </>
          }
          <Container className="mt-5">
            <Form onSubmit={this.handleCatSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="color">
                <Form.Label>Color</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="spayNeuter">
                <Form.Check type="checkbox" label="spay-neuter" />
              </Form.Group>
              <Button type="submit">Add Cat</Button>
            </Form>
          </Container>
        </main>
      </>
    );
  }
}

export default App;