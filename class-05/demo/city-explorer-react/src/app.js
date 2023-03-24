import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Main from './main.js';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;