import React from 'react'
import RecipeCard from './RecipeCard'

export default function RecipeContainer(props) {

const allRecipes = props.recipes.map(recipe => {
    return(
        <div className='recipe-all'>
            <RecipeCard 
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            notes={recipe.notes}
            />
        </div>
    )
})

    return(
        <div className="card-container">
            {allRecipes}
        </div>
    )
}