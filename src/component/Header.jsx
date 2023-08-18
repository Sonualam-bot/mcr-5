import { useContext } from "react"
import "./Header.css"
import { RecipeContext } from "../context/RecipeContext"

export const Header = () => {
    const { setSearchValue, radioFilterValue, state: { radioValue } } = useContext(RecipeContext)
    return (
        <div className="headerContainer" >
            <input type="text" placeholder="search the item you want" onChange={setSearchValue} />
            <div className="filterdiv" >
                <p>Filters</p>
                <input type="radio" name="radio" value="name" onClick={radioFilterValue} checked={radioValue === "name" ? true : false} />Name

                <input type="radio" name="radio" value="ingredients" onClick={radioFilterValue}
                    checked={radioValue === "ingredients" ? true : false} />Ingredients


                <input type="radio" name="radio" value="cuisine" onClick={radioFilterValue} checked={radioValue === "cuisine" ? true : false} />Cuisine
            </div>
        </div>
    )
}