const DefaultState = {
  loading: false,
  data: {},
  errorMsg: "",
  count: 0
};

const PokemonTypeMultipleReducer = (state = DefaultState, action) => {
  switch (action.type) {
      case "POKEMON_TYPE_LIST_LOADING":
          return {
              ...state,
              loading: true,
              errorMsg: ""
          };
      case "POKEMON_TYPE_LIST_FAILED":
          return {
              ...state,
              loading: false,
              errorMsg: "You are gonna die"
          };
      case "POKEMON_TYPE_LIST_SUCCESS":
          return {
              ...state,
              loading: false,
              errorMsg: "",
            //   data: action.payload.results,
            //   count: action.payload.count,
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
