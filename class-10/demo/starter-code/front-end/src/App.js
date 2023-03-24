import React from 'react';
import axios from 'axios';
import Recipe from './components/Recipe';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      ingredient:'',
      recipes: []
    }
  }

  getRecipes = async (e) => {
    e.preventDefault();
    const server='http://localhost:3001';
    const recipes = await axios.get(`${server}/recipes`, {params: {ingredient: this.state.ingredient}});
  }

  render() {
    return(
      <>
        <form onSubmit={this.getRecipes}>
          <label>enter an ingredient</label>
          <input onChange={(e) => this.setState({ ingredient:e.target.value })} type="text" name="ingredient"></input>
          <button>submit</button>
        </form>

        {this.state.recipes.length && this.state.recipes.map((recipe, idx) => (
          <Recipe
            key={idx}
            recipe={recipe}
          />
          ))
        }
      </>
    )
  }
}

export default App;
