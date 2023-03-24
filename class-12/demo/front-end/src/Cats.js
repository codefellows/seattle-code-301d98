import { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

class Cats extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.cats.length && this.props.cats.map(cat => (
          <ListGroup.Item key={cat._id} >
            <Cat info={cat} onDelete={this.props.onDelete} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  }
}

class Cat extends Component {

  delete = () => {
    this.props.onDelete(this.props.info);
  }

  render() {
    return (
      <h3>{this.props.info.name} ({this.props.info.location}) <span onClick={this.delete}>[X]</span></h3>

    );
  }
}

export default Cats;