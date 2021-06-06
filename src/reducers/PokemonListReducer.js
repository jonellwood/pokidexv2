const DefaultState = {
    loading: false,
    data: [],
    errorMsg: "",
    count: 0
};

const PokemonListReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "POKEMON_LIST_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: "",
            };
        case "POKEMON_LIST_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: "This webdev sucks at life",
            };
        case "POKEMON_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                errorMsg: "",
                count: action.payload.count,
            };
        default:
            return state
    }
};

export default PokemonListReducer