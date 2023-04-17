import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMsg: ''
    }
  }

  // ** Handles getting the city input from the user and setting it to state for other functions to use
  handleCityInput = (ev) =>{
    this.setState({
      city: ev.target.value
    })
  }

  // ** async/await - handle our promises - call back from axios
  // ** try/catch - handle our errors - TRY resolves our successful promise & CATCH - handle our rejected promise

  // TODO: render a map using the following URL example:
  // ** https://maps.locationiq.com/v3/staticmap?key=<YOUR KEY HERE>&center=<LAT>,<LON>&zoom=14

  getCityData = async (ev) => {
    ev.preventDefault();
    try {
    // TODO: define our url to pass to axios using the city in state
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&q=${this.state.city}&format=json`

    // TODO:  call to the location IQ API using axios

    let cityData = await axios.get(url)

    console.log(cityData.data[0])
    // TODO: Take the return from axios and set that to state - hold cityData
    this.setState({
      cityData: cityData.data[0],
      error: false
    })

    } catch(error){
      // TODO: set state with the error boolean and error message
      this.setState({
        error: true,
        errorMsg: error.message
      })
    }

  }


  render() {
    return (
      <>
        <h2>City Data</h2>
        <form onSubmit={this.getCityData}>
          <label> Enter in a City name:
            <input type="text" onInput={this.handleCityInput}/>
          </label>
          <button type="submit">Explore!</button>
        </form>

        {/* TERNARY - WTF */}
        {/* condition ? true : false */}

        {
          this.state.error
          ? <p>{this.state.errorMsg}</p>
          : <p>{this.state.cityData.display_name}</p>
        }

      </>
    )
  }
}

export default Main;





// **** POKEMON API DEMO *****

// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pokemonData: []
//     }
//   }

//   // TODO: Make a call to the pokemon api, then render the data in the render method
//   // ** async / await
//   getPokemonData = async (ev) => {
//     ev.preventDefault();

//     // TODO: Use Axios to help me make my API call
//     // ** axios.get() -> 1 arg = url of the API that I want to hit
//     let pokemonData = await axios.get('https://pokeapi.co/api/v2/pokemon/');

//     console.log(pokemonData.data.results);
//     // ** .data - where axios store the info
//     // ** .results - where the api stores the actual pokemon data

//     // TODO: store that in state
//     this.setState({
//       pokemonData: pokemonData.data.results
//     })
//   }

//   render() {
//     return (
//       <>
//         <h2>Pokemon Data</h2>
//         <form >
//           <button onClick={this.getPokemonData}>Gotta Catch them all!</button>
//         </form>

//         <ul>
//           {this.state.pokemonData.map((pokemon, idx) => <li key={idx}>{pokemon.name}</li>)}
//         </ul>
//       </>
//     )
//   }
// }

// export default Main;
