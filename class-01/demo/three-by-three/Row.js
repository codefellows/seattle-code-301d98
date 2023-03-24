import { Component } from 'react'
import Square from './Square'
import './row.css'

class Row extends Component {

  render() {

    const start = props.index * 3;

    return (
      <div className="row">
        <Square value={start + 1} />
        <Square value={start + 2} />
        <Square value={start + 3} />
      </div>
    )
  }
}

export default Row;
