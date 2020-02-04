import React, {Component} from 'react'

export default class RecipeForm extends Component {

    state = {
        newRecipe: {
            title: "",
            image: "",
            ingredients: "",
            instructions: "",
            notes: ""
        }
    }

    render() {
        return(
            <section className="add-recipe">
                <h3>Add a New Recipe:</h3>
                <form>
                <input 
                type="text" 
                name="title" 
                placeholder="Name" 
                value={this.state.newRecipe.title}
                />
                <input 
                type="text" 
                name="image" 
                placeholder="Image URL" 
                value={this.state.newRecipe.image}
                />
                <input 
                type="text" 
                name="ingredients" 
                placeholder="Ingredients" 
                value={this.state.newRecipe.ingredients}
                />
                <input 
                type="text" 
                name="instructions" 
                placeholder="Instructions" 
                value={this.state.newRecipe.instructions}
                />
                <input 
                type="text" 
                name="notes" 
                placeholder="Notes" 
                value={this.state.newRecipe.notes}
                />
                <input type="submit" value="Add Recipe" />
                </form>
            </section>
        )
    }
}