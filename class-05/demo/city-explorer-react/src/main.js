import React from 'react';
import Map from './map.js';
import Restaurants from './restaurants.js';
import location from './fake-data/location.json';
import restaurants from './fake-data/restaurants.json';
import map from './images/map.png';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayResults: false,
      locationObj: location,
      restaurants: restaurants
    }
  }

  handleLocationSearch = (e) => {
    e.preventDefault();
    this.setState({ displayResults: true });
  }

  render(){
    return(
      <div id="main">
        <form onSubmit={this.handleLocationSearch} id="search-form">
          <label>Search for a location</label>
          <input type="text" name="search" id="input-search" placeholder="Enter a location here" />
          <button type="submit">Explore!</button>
        </form>

        {this.state.displayResults &&
          <div>
            <Map
              location={this.state.locationObj}
              map={map}
            />
            <Restaurants
              restaurants={this.state.restaurants}
              location={this.state.locationObj}
            />
          </div>
        }

      </div>
    )
  }
}

export default Main;
