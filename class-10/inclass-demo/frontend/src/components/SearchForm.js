import React from 'react';
import { Button, Form } from 'react-bootstrap'

class SearchForm extends React.Component {
  render() {
    console.log('Search form props: ', this.props);
    return (
        <Form onSubmit={this.props.getCityInfo}>
          <Form.Group>
            <Form.Label>Enter in a City: </Form.Label>
            <Form.Control type="text" onInput={this.props.handleCityInput} />
          </Form.Group>
          <Button type="submit">Explore!</Button>
        </Form>
    )
  }
}

export default SearchForm;