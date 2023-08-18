import { useContext } from "react"
import "./EditRecipe.css"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { RecipeContext } from "../context/RecipeContext"

export const AddEditRecipe = () => {

    const { state: { newRecipe }, handleShowAddRecipeForm, handleSaveNewRecipe, handleAddInput } = useContext(RecipeContext)






    return (
        <>
            <div className="formContainer" >
                <div className="formBody" >
                    <AiOutlineCloseCircle onClick={handleShowAddRecipeForm} />
                    {/* <AiOutlineCloseCircle onClick={handleShowAddForm} /> */}
                    <label htmlFor="recipeName"  >Recipe Name</label>
                    <input type="text" placeholder="Recipe name" name="recipe_name" value={newRecipe?.recipe_name} onChange={handleAddInput} />

                    <label htmlFor="cuisine-type"  >Cuisine Type</label>
                    <input type="text" placeholder="Cuisine type" name="cuisine" value={newRecipe?.cuisine} onChange={handleAddInput} />

                    <label htmlFor="ingredients"  >Ingredients</label>
                    <input type="text" placeholder="Ingredients" name="ingredients" value={newRecipe?.ingredients} onChange={handleAddInput} />

                    <label htmlFor="instructions"  >Instructions</label>
                    <input type="text" placeholder="instructions" name="instructions" value={newRecipe?.instructions} onChange={handleAddInput} />

                    <label htmlFor="recipe-image" >Image url</label>
                    <input type="url" placeholder="recipe image" name="image" value={newRecipe?.image} onChange={handleAddInput} />
                    <button onClick={handleSaveNewRecipe} >Save</button>
                </div>
            </div>
        </>
    )
}