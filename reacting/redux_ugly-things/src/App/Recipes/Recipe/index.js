import React from 'react';
import { connect } from 'react-redux';
import { removeRecipe } from '../../../Redux/recipes.js';
import Form from '../../../shared/Form';

function Recipe(props) {
    let { index, name, category, cookTime, removeRecipe } = props;
    return (
        <div>
            <h3>{name}</h3>
            <p>type: {category}</p>
            <p>time to prep: {cookTime}</p>
            <button onClick={() => removeRecipe(index)}>X</button>
            <Form {...props}/>
        </div>
    )
}

export default connect(null, { removeRecipe })(Recipe);
