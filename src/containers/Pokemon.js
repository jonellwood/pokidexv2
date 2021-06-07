import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {GetPokemon} from '../actions/pokemonActions';

const Pokemon = (props) => {
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch();
    const PokemonState = useSelector(state => state.pokemon);
    React.useEffect(() => {
        dispatch(GetPokemon(pokemonName))
    }, [])
    
    console.log("pokemonName", pokemonName)
    
    return(
        <div>Pokemon</div>
    )
};

export default Pokemon;