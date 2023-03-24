import React from 'react';

class Recipe extends React.Component {
  render() {
    return(
      <div key={idx}>
        <h2><a href={this.props.recipe.uri}>{this.props.recipe.name}</a></h2>
        <img src={recipe.image_url} />
        <ul>
          {this.props.recipe.ingredients.map(ingredient => (
            <li key={Math.random()}>{ingredient}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Recipe; 
