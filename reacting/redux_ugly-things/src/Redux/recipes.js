const recipesReducer = (prevRecipes = [], action) => {
    switch (action.type) {
        case "ADD_RECIPE":
            return [...prevRecipes, action.recipe]
        case "EDIT_RECIPE":
            return [...prevRecipes].map((recipe, i) => {
                if (i === action.index) {
                    return action.updatedRecipe;
                } else {
                    return recipe;
                }
            })
        default:
            return prevRecipes;
    }
}

export const addRecipe = (recipe) => {
    return {
        type: "ADD_RECIPE",
        recipe
    }
}

export const editRecipe = (updatedRecipe, index) => {
    return {
        type: "EDIT_RECIPE",
        updatedRecipe,
        index
    }
}

export default recipesReducer;