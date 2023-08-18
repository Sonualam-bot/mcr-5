import { useContext } from "react";
import { useParams } from "react-router"
import { RecipeContext } from "../context/RecipeContext";

import "./RecipeDetail.css"

export const RecipeDetail = () => {
    const { recipeId } = useParams();
    const { state: { searchDB } } = useContext(RecipeContext)

    const selectedRecipe = searchDB?.find((recipe) => recipe.id === +recipeId)
    console.log(recipeId)
    console.log(selectedRecipe)


    const { id, image, recipe_name, cuisine, ingredients, instructions } = selectedRecipe;

    const recipeIngredient = ingredients?.map((ingredient) => ingredient).join(",");

    const recipeInstructions = instructions?.map((instruction) => {
        return (

            <li key={instruction}> {instruction} </li>

        )
    })

    return (
        <>
            <div className="detailContainer" >
                <h2>
                    {recipe_name}
                </h2>
                <div className="detailRecipe" >
                    <img src={image} alt="recipeThumbnail" />
                    <div>

                        <p>Cuisine: <span>  {cuisine} </span> </p>


                        <p> Ingredients :   <span>{recipeIngredient} </span> </p>

                        <p> Instructions :<ol > {recipeInstructions}</ol>  </p>
                    </div>
                </div>
            </div >
        </>
    )
}