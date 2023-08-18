import { RecipeDb } from "../Utils/RecipeDb";

export const initialState = {
    recipeDb: RecipeDb,
    searchDB: RecipeDb,
    searchValue: "",
    radioValue: "name",
    newRecipe: {
        id: "",
        recipe_name: "",
        cuisine: "",
        ingredients: [],
        instructions: [],
        image: ""

    },
    toggleAddNewRecipeForm: false,
    isEditing: false
}

export const recipeReducer = (state, action) => {
    const { type, payload } = action;



    switch (type) {
        case "SEARCH_VALUE":
            return { ...state, searchValue: payload.searchValue }
        case "RADIO_FILTER_VALUE":
            return { ...state, radioValue: payload.radioValue }
        case "DELETE_RECIPE":
            return { ...state, searchDB: payload.deleteRecipe }
        case "SHOW_ADD_RECIPE_FORM":
            return { ...state, toggleAddNewRecipeForm: payload.formToggle }
        case "NEW_RECIPE_INPUT":
            return { ...state, newRecipe: { ...payload } }
        case "SAVE_NEW_RECIPE":
            return { ...state, searchDB: [...state.searchDB, payload], newRecipe: "" }
        case "EDIT_RECIPE":
            return { ...state, newRecipe: payload.recipeToEdit, isEditing: payload.editForm }
        case "SAVE_EDITED_RECIPE":
            return { ...state, searchDB: payload.saveEditedRecipe, newRecipe: "", isEditing: false }

        default:
            throw new Error(`Unknown action type ${action.type} `)
    }

}