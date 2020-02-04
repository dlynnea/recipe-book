import React from 'react';

export default function RecipeCard(props) {

        return(
            <section className="recipe-card">
                <div className="recipe-top">
                    <h2 className="title">{props.title}</h2>
                    <span>
                        <i className="fa fa-pencil"></i>
                        <i className="fa fa-times-circle"></i>
                    </span>
                </div>
                <div>
                    <img src={props.image} />
                    <h4 className="ingredient-card">{props.ingredients}</h4>
                    <p className="instruction-card">{props.instructions}</p>
                    <p className="note-card">{props.notes}</p>
                </div>
            </section>
        )
    }
