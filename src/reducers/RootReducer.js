import {combineReducers} from 'redux';
import PokemonListReducer from './PokemonListReducer';
import PokemonMultipleReducer from './PokemonMultipleReducer';
import PokemonTypeListReducer from './PokemonTypeListReducer';
import PokemonTypeMultipleReducer from './PokemonTypeMultipleReducer';

const RootReducer = combineReducers({
    PokemonList: PokemonListReducer,
    Pokemon: PokemonMultipleReducer,
    PokemonTypeList: PokemonTypeListReducer,
    Types: PokemonTypeMultipleReducer,
});

export default RootReducer;
