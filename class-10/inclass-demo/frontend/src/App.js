import React from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import CityData from './components/CityData';
import ErrorAlert from './components/ErrorAlert';
import Photo from './components/Photo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      mapSrc: '',
      error: false,
      errorMessage: '',
      photoData: [],
      showImages: false,
      photoError: false,
      photoErrorMessage: ''
    }
  }
 

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  getCityData = async (event) => {
    event.preventDefault();

    try {

      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

      let cityDataFromAxios = await axios.get(url);

      this.setState({
        cityData: cityDataFromAxios.data[0],
        mapSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityDataFromAxios.data[0].lat},${cityDataFromAxios.data[0].lon}&zoom=15&markers=icon:small-red-cutout|${cityDataFromAxios.data[0].lat},${cityDataFromAxios.data[0].lon}`,
        error: false
      });
      this.getPhotos();
    } catch (error) {

      this.setState({
        error: true,
        errorMessage: error.message
      })
    }

  }

  getPhotos = async () => {

    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/photos?city=${this.state.city}`)
      this.setState({
        photoData: results.data,
        showImages: true,
        photoError: false,
        photoErrorMessage: ''
      })
    } catch (error) {
      this.setState({
        photoError: true,
        showImages: false,
        photoErrorMessage: `A Photo Error Occurred: ${error.response.status}, ${error.response.data}`

      })
    }
  }


  render() {
    return (
      <>
        <Container>
          <h1>API CALLS</h1>

          <SearchForm
            getCityInfo={this.getCityData}
            handleCityInput={this.handleCityInput}
          />

          {
            this.state.error
              ? <ErrorAlert errorMessage={this.state.errorMessage} />
              : Object.keys(this.state.cityData).length > 0 && <CityData
                cityData={this.state.cityData}
                mapSrc={this.state.mapSrc}
              />
          }
        </Container>

        {
          this.state.showImages &&
          <>
            <Container>
              <Carousel>
                {this.state.photoData.map((pic, idx) => (
                  <Photo key={idx} pic={pic} />
                ))}
              </Carousel>
            </Container>
          </>
        }
      </>
    )
  }
}

export default App;

