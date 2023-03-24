import { Component } from "react";
import './square.css';

export default class Square extends Component {
  render() {
    return <button className="square">{this.props.value}</button>
  }
}
