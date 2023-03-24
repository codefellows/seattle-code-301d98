import React from 'react';
import axios from 'axios';
import Cats from './Cats';
import CatForm from './CatForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    }
  }

  async fetchCats() {
    try {
      const response = await axios.get(`${SERVER}/cats`);
      this.setState({ cats: response.data });
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.fetchCats();
  }

  handleCreate = async catInfo => {
    try {
      const response = await axios.post(`${SERVER}/cats`, catInfo);
      const newCat = response.data;
      this.setState({
        cats: [...this.state.cats, newCat]
      })
    } catch (error) {
      console.error(error);
    }
  }

  handleUpdate = async catToUpdate => {
    try {

      const updatedCats = this.state.cats.map(existingCat => {
        if (existingCat._id === catToUpdate._id) {
          return catToUpdate;
        } else {
          return existingCat;
        }
      });

      this.setState({
        cats: updatedCats
      })

      await axios.put(`${SERVER}/cats/${catToUpdate._id}`, catToUpdate);

    } catch (error) {
      console.error(error);
    }
  }

  handleDelete = async id => {
    try {
      await axios.delete(`${SERVER}/cats/${id}`);
      const remainingCats = this.state.cats.filter(cat => cat._id !== id);
      this.setState({
        cats: remainingCats
      })
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Container>
        <h1>World of Cats</h1>
        <CatForm onCreate={this.handleCreate} />
        <Cats cats={this.state.cats} onDelete={this.handleDelete} onUpdate={this.handleUpdate} />
      </Container>
    )
  }
}

export default App;
