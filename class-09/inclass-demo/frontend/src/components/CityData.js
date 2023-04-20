import React from 'react';
import Card from 'react-bootstrap/Card'
import '../CityData.css'

class CityData extends React.Component {
  render(){
    return (
      <Card>
        <Card.Img variant="top" src={this.props.mapSrc} />
        <Card.Title>{this.props.cityData.display_name}</Card.Title>
        <Card.Text>
          Lat: {this.props.cityData.lat} & Lon: {this.props.cityData.lon}
        </Card.Text>
      </Card>
    )
  }
}

export default CityData;