import { FETCH_COCKTAIL_FAIL, FETCH_COCKTAIL_START, FETCH_COCKTAIL_SUCCESS } from "./actionTypes";

const initialState ={
    cocktails:[],
    loading : false,
    erreur: null
}
const cocktailReducer=(state=initialState, action) =>{
    switch (action.type) {
       case FETCH_COCKTAIL_START :
           return {...state,loading: true}
           case FETCH_COCKTAIL_SUCCESS :
            return {...state,loading: false, cocktails: action.payload}
           case FETCH_COCKTAIL_FAIL:
               return {...state, loading: false, error : action.payload}
        default:
            return state;
    }
}
export default cocktailReducer 