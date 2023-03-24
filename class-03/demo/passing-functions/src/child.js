import React from 'react';
import teen from './assets/teen.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Square extends React.Component {

  askParentFor10Dollars = () => {
    this.props.askForMoney(10);
  }

  askParentFor20Dollars = () => {
    this.props.askForMoney(20);
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={teen} />
        <Card.Body>
          <Card.Title>Billy</Card.Title>
          <Card.Text>
            I am the Billy. I have {this.props.billysMoney} dollars.
          </Card.Text>
          <Button onClick={this.askParentFor10Dollars} variant="primary">Ask parent for 10 dollars</Button>
          <Button onClick={this.askParentFor20Dollars} variant="primary">Ask parent for 20 dollars</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Square;
