import React from 'react';
import Child from './child.js';
import mom from './assets/mom.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      billysMoney: 0,
      money: 100
    };
  }

  giveMoneyToBilly = (dollars) => {
    const parentBalance = this.state.money - dollars;
    this.setState({
      billysMoney: this.state.billysMoney + dollars,
      money: parentBalance
    });

    if (parentBalance < 0) {
      this.props.onOverdraft();
    }

  }

  render() {

    return (
      <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={mom} />
          <Card.Body>
            <Card.Title>Parent</Card.Title>
            <Card.Text>
              I am the parent. I have {this.state.money} dollars.
            </Card.Text>
          </Card.Body>
        </Card>
        <Child
          askForMoney={this.giveMoneyToBilly}
          billysMoney={this.state.billysMoney}
        />
      </CardGroup>
    );
  }
}

export default Parent;
