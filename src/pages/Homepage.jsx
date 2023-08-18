import { useContext } from "react"
import { RecipeContext } from "../context/RecipeContext"
import "./Homepage.css"

import { RecipeCard } from "../Card/RecipeCard"
import { AddEditRecipe } from "../Edit/AddEditRecipe"


export const Homepage = () => {
    const { searchItem, handleShowAddRecipeForm, state: { toggleAddNewRecipeForm, isEditing } } = useContext(RecipeContext)
    return (
        <>
            <div className="topContainer">
                <h2>All Recipies:</h2>
                <button onClick={handleShowAddRecipeForm} >Add New Recipe</button>
            </div>

            {toggleAddNewRecipeForm && <AddEditRecipe />}

            <div className="homeContainer">
                {searchItem?.map((recipe) => {

                    return (
                        <RecipeCard recipe={recipe} key={recipe.id} />
                    )
                })}
            </div>
        </>
    )
}