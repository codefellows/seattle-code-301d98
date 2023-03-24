import React from 'react';
import Child from './child.js';

class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      childName:"Billy"
    }
  }

  render() {

    return (
      <div>
        <Child
          name={this.state.childName}
        />
      </div>
    );
  }
}

export default Parent;