import React, {Component} from 'react';
import './App.css';
import RecipeContainer from './components/RecipeContainer'
import RecipeForm from './components/RecipeForm'

// const url = 'http://localhost:3000/recipes'

class App extends Component {

  state = {
    recipes: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/recipes')
    .then(response => response.json())
    .then(recipes => this.setState({
      recipes: recipes
    }))
  }

  render() {
    return (
      <div className="App">
        <header>
        <h1>My Recipe Book</h1>
        <RecipeContainer recipes={this.state.recipes} />
        </header>
        <main>
          <RecipeForm />
        </main>
      </div>
    );
  }
}

export default App;
