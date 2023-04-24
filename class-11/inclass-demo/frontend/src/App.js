import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    }
  }

  // TODO: use axios to make a call out to my server get all cats from the DB
  getCats = async () => {
    try {
      // TODO: build the url for axios to hit my server - my cats endpoint
      // http://localhost:3001/cats
        let url = `${process.env.REACT_APP_SERVER}/cats`
  
      // TODO: pass the url into an axios.get() and then store that return in a variable
      let urlData = await axios.get(url);

      // TODO: take that return and set state of cats
      this.setState({
        cats: urlData.data
      })
      
    } catch (error) {
      console.log(error.message);
    }
  }

  //  **** REACT LIFECYCLE METHOD **** THE MINUTE APP IS RENDERED, IT WILL RUN THE PROVIDED CODE -> FUNCTION
  componentDidMount(){
    this.getCats();
  }

  render() {
    console.log('App State >>> ', this.state);
    return (
      <>
        <header>
          <h1>Cool Cats</h1>
        </header>
        <main>
          {
            this.state.cats.length > 0 &&
            <>
              {this.state.cats.map(cat => {
                return <p key={cat._id}>{cat.name} is a {cat.color}</p>
              })}
            </>
          }
        </main>
      </>
    );
  }
}

export default App;