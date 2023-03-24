import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      jobs: []
    }
  }

  componentDidMount = async () => {
    const API = 'http://localhost:3001';
    const jobs = await axios.get(`${API}/jobs`);
    this.setState({ jobs: jobs.data })
  }

  render() {
    return(
      <>
        {this.state.jobs.length && this.state.jobs.map((job, idx) => (
          <div key={idx}>
            <h3>Vault Tec</h3>
            <h2><a href={job.url}>{job.name}</a></h2>
            <p>{job.description}</p>
            <p>{job.location}</p>
          </div>
        ))}
      </>
    )
  }
}

export default Main;
