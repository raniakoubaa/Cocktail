import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {fetchCocktail} from '../Redux/action'

const CocktailList = () => {
  const [modifierCocktail, setmodifierCocktail] = useState([])
//   const cok = useSelector(state => ({...state.data.cocktails}))
    const dispatch = useDispatch()
    const {cocktails, loading} = useSelector((state) => ({...state.data}))
   console.log(cocktails,"cocktail")
    useEffect(() => {
        dispatch(fetchCocktail());
    }, []);
useEffect(() => {
    if(cocktails){
        const newCocktails=cocktails.map(item => {
            const {idDrink,strDrink, strDrinkThumb, strAlcoholic, strGlass} =item;
            return {
                id: idDrink,
                name: strDrink,
                image : strDrinkThumb,
                info : strAlcoholic,
                glass:  strGlass
            }
        })
        setmodifierCocktail(newCocktails)
    }else{
        setmodifierCocktail([])
    }

}, [cocktails])
if(loading){
    return(  <div className='spinner-grow' role="status">
    <span className='visually-hidden'> Loading ...</span>
    </div>
     )
}
if(!cocktails){
    return <h2> No Cocktails matched you search criteria</h2>
}

    return (
       <div className='container'>
           
           <div className='row row-cols-1 row-colmd-3 g-4'>
               {modifierCocktail.map(item =>{ 
                const {id, name, image, glass, info} = item;
                return(
                    <div className='col' key={id}>
                    <div className='card m-2'>
                        <img src={image} alt={name} className='card-img-top'/>
                         <div className='card-body' style={{textAlign: "left"}}></div>
                        <h5 className='card-title'>{name}</h5>
                        <h4 className='card-title'>{glass}</h4>
                        <p className='card-title'>{info}</p>
                        <Link to={`/cocktail/${id}`}>
                            <button className="btn btn-info"> Details</button>
                        </Link>
                    </div>
                    </div>
                )
               })}
           </div>
        </div>
    )
}

export default CocktailList
