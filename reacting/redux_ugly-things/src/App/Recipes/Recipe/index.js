import React from 'react';
import { connect } from 'react-redux';
import { removeRecipe } from '../../../Redux/recipes.js';
import Form from '../../../shared/Form';

function Recipe(props) {
    let { index, name, category, image, removeRecipe } = props;
    return (
        <div>
            <h3>{name}</h3>
            <p>type: {category}</p>
            <p>awfuleness: <img src={image} alt=""/></p>
            <button onClick={() => removeRecipe(index)}>X</button>
            <Form {...props}/>
        </div>
    )
}

export default connect(null, { removeRecipe })(Recipe);
