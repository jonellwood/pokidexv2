import PokemonTypeListReducer from "./PokemonTypeListReducer";

const DefaultState = {
  loading: false,
  data: {},
  errorMsg: ""
};

const PokemonTypeMultipleReducer = (state = DefaultState, action) => {
  switch (action.type) {
      case "POKEMON_MULTIPLE_LOADING":
          return {
              ...state,
              loading: true,
              errorMsg: ""
          };
      case "POKEMON_MULTIPLE_FAILED":
          return {
              ...state,
              loading: false,
              errorMsg: "You are gonna die"
          };
      case "POKEMON_MULTIPLE_SUCCESS":
          return {
              ...state,
              loading: false,
              errorMsg: "",
              data: {
                  ...state.data,
                  [action.pokemonType]: action.payload
              }
          };
      default:
          return state

  }
}
export default PokemonTypeMultipleReducer;
