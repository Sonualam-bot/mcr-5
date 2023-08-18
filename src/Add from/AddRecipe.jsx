import { useContext } from "react"
import { RecipeContext } from "../context/RecipeContext"
import { EditRecipe } from "../Edit/EditRecipe"

export const AddRecipe = () => {
    const { state: { showAddForm } } = useContext(RecipeContext)
    return (
        <>
            {
                showAddForm && <EditRecipe />
            }

        </>
    )
}