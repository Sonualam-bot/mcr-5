import { createContext, useReducer } from "react";
import { initialState, recipeReducer } from "../reducer/recipeReducer";

export const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(recipeReducer, initialState);



    //search functionality
    const setSearchValue = (e) => {
        dispatch({
            type: "SEARCH_VALUE",
            payload: {
                searchValue: e.target.value
            }
        })
    }

    const searchItem = state.searchDB?.filter((recipe) => {
        if (state.radioValue === "name") {
            return recipe?.recipe_name?.toLowerCase().includes(state?.searchValue.toLowerCase())
        } else if (state.radioValue === "cuisine") {
            return recipe.cuisine.toLowerCase().includes(state.searchValue.toLowerCase())
        } else {
            return recipe.ingredients?.some((ingredient) => ingredient.toLowerCase().includes(state.searchValue.toLowerCase()))
        }
    })

    const radioFilterValue = (e) => {
        dispatch({
            type: "RADIO_FILTER_VALUE",
            payload: {
                radioValue: e.target.value
            }
        })
    }


    //delete functionality
    const deleteRecipe = (recipeId) => {
        const deleteSelectedRecipe = state.searchDB?.filter((recipe) => recipe.id !== recipeId)
        dispatch({
            type: "DELETE_RECIPE",
            payload: {
                deleteRecipe: deleteSelectedRecipe
            }
        })
    }



    //add new recipe functionality
    const handleShowAddRecipeForm = () => {
        dispatch({
            type: "SHOW_ADD_RECIPE_FORM",
            payload: {
                formToggle: !state.toggleAddNewRecipeForm
            }
        })
    }

    const handleAddInput = (e) => {
        const { name, value } = e.target;
        if (name === "ingredients" || name === "instructions") {

            dispatch({
                type: "NEW_RECIPE_INPUT",
                payload: {
                    ...state.newRecipe,
                    [name]: value.split("\n")
                }
            });
        } else {

            dispatch({
                type: "NEW_RECIPE_INPUT",
                payload: {
                    ...state.newRecipe,
                    [name]: value
                }
            });
        }
    };


    const handleSaveNewRecipe = () => {
        // const saveRecipe = state.searchDB.concat(state.newRecipe)
        if (state.isEditing) {
            const updatedRecipe = state.searchDB.map((recipe) => recipe.id === state.newRecipe.id ? { ...state.newRecipe } : recipe)
            dispatch({
                type: "SAVE_EDITED_RECIPE",
                payload: {
                    saveEditedRecipe: updatedRecipe
                }
            })

        } else {
            dispatch({
                type: "SAVE_NEW_RECIPE",
                payload: {
                    ...state.newRecipe,
                    id: state.searchDB.length + 1
                }
            })
        }


        handleShowAddRecipeForm()

    }

    //this is for editing the recipe
    const handleEditing = (recipe) => {
        dispatch({
            type: "EDIT_RECIPE",
            payload: {
                editForm: !state.isEditing,
                recipeToEdit: recipe
            }
        })
        handleShowAddRecipeForm()
    }


    console.log('state.isEditing', state.isEditing, "state.toggleAddNewRecipeForm", state.toggleAddNewRecipeForm)




    const value = {
        state,
        searchItem,
        setSearchValue,
        radioFilterValue,
        deleteRecipe,

        handleShowAddRecipeForm,
        handleSaveNewRecipe,
        handleAddInput,
        handleEditing

    }


    return (
        <>
            <RecipeContext.Provider value={value} >
                {children}
            </RecipeContext.Provider>
        </>
    )
}