
import axios from "axios"
import * as types from "./actionTypes"
 const fetchCocktailStart = () =>({
     type: types.FETCH_COCKTAIL_START
 })
 const fetchCocktailSuccess = (cocktails) =>({
    type: types.FETCH_COCKTAIL_SUCCESS,
    payload:cocktails
})
const fetchCocktailFail = (error) =>({
    type: types.FETCH_COCKTAIL_FAIL,
    payload: error
})
export function fetchCocktail(){
    return function (dispatch){
        dispatch(fetchCocktailStart())
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        .then((response)=> {
            dispatch(fetchCocktailSuccess(response.data.drinks))
        })
        .catch((error) => {
            dispatch(fetchCocktailFail(error))
        })
    }
}