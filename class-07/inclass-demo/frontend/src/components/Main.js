import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      species: '',
      petData: {},
      showPet: false
    }
  }

  handleInput = (ev) =>{
    this.setState({
      species: ev.target.value
    })
  }

  handleSubmit = async (ev) => {
    ev.preventDefault();
    // http://localhost:3001/pet?species=cat
    try {
      let url = `${process.env.REACT_APP_SERVER}/pet?species=${this.state.species}`;

      let petData = await axios.get(url);

      console.log(petData.data);
      this.setState({
        petData: petData.data,
        showPet: true
      })
      

    } catch (error) {
      console.log(error.message);
    }
  }

  
  render() {
    return (
      <>
       
        <form onSubmit={this.handleSubmit}>
          <label> Find your pet: 
            <input type="text" onInput={this.handleInput}/>
          </label>
          <button type="submit">Display Pet!</button>
        </form>

        {
          this.state.showPet && <p>{this.state.petData.name} is a {this.state.petData.breed}</p>
        }

      </>
    )
  }
}

export default Main;

