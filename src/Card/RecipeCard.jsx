import { NavLink } from "react-router-dom";
import "./Card.css"
import { LuEdit } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
export const RecipeCard = ({ recipe }) => {
    const { deleteRecipe, handleEditing } = useContext(RecipeContext)
    const { id, image, recipe_name, cuisine } = recipe



    return (
        <>
            <div key={id} className="cardContainer" >
                <div className="actionBtns">
                    <LuEdit onClick={() => handleEditing(recipe)} />
                    <RiDeleteBin6Line onClick={() => deleteRecipe(id)} />
                </div>
                <img src={image} alt="recipeThumbnail" />
                <h2> {recipe_name} </h2>
                <div className="recipeSpecial" >
                    <p> Cuisine Type: </p>
                    <p>{cuisine}  </p>
                </div>
                <div className="recipeSpecial" >
                    <p> Ingredients:  </p>
                    <NavLink to={`/detail/${id}`} className="navlink">See More {">"} </NavLink>
                </div>
                <div className="recipeSpecial" >
                    <p> Instructions:  </p>
                    <NavLink to={`/detail/${id}`} className="navlink">See More {">"} </NavLink>
                </div>
            </div>
        </>
    )
}