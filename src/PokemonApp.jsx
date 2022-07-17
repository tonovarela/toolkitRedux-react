import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";


export const PokemonApp = () => {
  const dispatch = useDispatch();
  const  {pokemons=[],isLoading=false,page=0 } = useSelector((state)=>state.pokemons)
  useEffect(() => {
  dispatch(getPokemons());
  }, [])
  
  return (
    <>
    <h1>Pokemon APP</h1>
    <hr></hr>
    <span>Loading:{isLoading ?'TRUE':"FALSE"}</span>
    <ul>
    {pokemons.map(({name})=>{
     return <li key={name}>{name}</li>
    })}
    </ul>
    <button disabled={isLoading}
    onClick= { ()=> dispatch(getPokemons(page))}
    >Siguiente</button>
    </>
  )
}
