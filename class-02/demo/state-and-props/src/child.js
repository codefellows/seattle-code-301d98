import React from 'react';
import boy from './assets/boy.jpg';

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patsOnBillysHead: 0
    };
  }

  patBillysHead = () => {
    this.setState({ patsOnBillysHead: this.state.patsOnBillysHead + 1 });
  }

  render() {
    return (
      <>
        <h2>{this.props.name}</h2>
        <img onClick={this.patBillysHead} src={boy} alt={this.props.name} title={this.props.name} width={300} />
        <span>👋 {this.state.patsOnBillysHead}</span>
      </>
    );
  }
}

export default Child;