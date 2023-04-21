import React from 'react';
import Alert from 'react-bootstrap/Alert'

class ErrorAlert extends React.Component {
  render(){
    return(
        <>
        {
          this.props.errorMessage.includes('4') 
          ? <Alert variant="warning">{this.props.errorMessage}</Alert>
          :
          <Alert variant="danger">{this.props.errorMessage}</Alert>
        }
        
        </>
      
    )
  }
}

export default ErrorAlert;