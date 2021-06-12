import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {GetPokemon } from '../actions/pokemonActions';
import _ from 'lodash';
import Type from './Type';
// import {GetType} from '../actions/pokemonActions';


const Pokemon = (props) => {
    const pokemonName = props.match.params.pokemon;
    // const typeName = props.match.params.type;
    const dispatch = useDispatch();
    const PokemonState = useSelector(state => state.Pokemon);
    React.useEffect(() => {
      dispatch(GetPokemon(pokemonName))
    }, []);
    // const TypeState = useSelector(state => state.Type);
    // React.useEffect(() => {
    //   dispatch(GetType(typeName))
    // }, []);
    // console.log(pokemonName);
    

    const ShowData = () => {
      if (!_.isEmpty(PokemonState.data[pokemonName])) {
        const pokeData = PokemonState.data[pokemonName];0
        const pokeType = pokeData.types[0].type.name;
        // const typeData = TypeState.data[pokeType];
        console.log(pokeType);
        return (
          <div className={"pokemon-photo-wrapper"}>
            <div className={"items"}>
              <img className="pokePic" src={pokeData.sprites.other.dream_world.front_default} alt={pokemonName} />
              {/* <img className="pokePic" src={pokeData.sprites.back_default} alt={pokemonName} />
              <img className="pokePic" src={pokeData.sprites.front_shiny} alt={pokemonName} />
              <img className="pokePic" src={pokeData.sprites.back_shiny} alt={pokemonName} /> */}
          </div>
          <div className={"pokemon-wrapper"}>
              {/* <div className="items">
                <h1>Info</h1>
                
                <p className="pokeTypeName">Height: {pokeData.height} units?</p>
                <p className="pokeTypeName">Weight: {pokeData.weight} units?</p>
              </div> */}
            <div className="items">
              <h1>Stats</h1>
                <p className="pokeTypeName">Height: {pokeData.height} units?</p>
                <p className="pokeTypeName">Weight: {pokeData.weight} units?</p>
              {pokeData.stats.map(el => {
                return <p className="statlist">{el.stat.name} - {el.base_stat}</p>
              })}
            </div>
            <div className="items">
              <h1>Abilities</h1>
              {pokeData.abilities.map(el => {
                return <p className="abilityList">{el.ability.name}</p>
              })}
            </div>
            <div className="items">
              <h1>Type Information</h1>
              <p className="pokeTypeName">Type: {pokeData.types[0].type.name}</p>
              
              
            </div>
            <div className="items">
              <h1>Moves</h1>
              {pokeData.moves.map(el => {
                return <p className="abilityList">{el.move.name}</p>
              })}
              </div>
            </div>
          </div>
        )
      }

      if (PokemonState.loading) {
        return <p>Loading</p>
      }

      if (PokemonState.errorMsg !== "") {
        return <p>{PokemonState.errorMsg}</p>
      }
      return <p>Error in your life.</p>
    }
    
    return(
        <div className={"poke"}>
          <h1>{pokemonName}</h1>
          {ShowData()}
          {/* <Type type={pokeType} /> */}
        </div>
    )
};

export default Pokemon;
