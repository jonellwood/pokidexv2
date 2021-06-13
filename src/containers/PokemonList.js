import React, { useState }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from "lodash";
import { GetPokemonList } from '../actions/pokemonActions';
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const PokemonList = (props) => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.PokemonList);
    React.useEffect(() => {
        FetchData(1)
      }, []);

    const FetchData = (page = 1) => {
        dispatch(GetPokemonList(page))
    }

    const ShowData = () => {
        if (pokemonList.loading) {
          return <p>Loading...</p>
        }

        if (!_.isEmpty(pokemonList.data)) {
          // console.log(pokemonList.data);
          return(
            <div className={"list-wrapper"}>
              {pokemonList.data.map(el => {
                return(
                  <div className={"pokemon-item"}>
                    <p>{el.name}</p>
                    {/* <img src={`https://img.pokemondb.net/sprites/bank/normal/${el.name}.png`}/> */}
                    <img alt={`${el.name}`} src={`https://img.pokemondb.net/artwork/vector/${el.name}.png`}/>
                    <p><Link to={`/pokemon/${el.name}`}>View</Link></p>
                  </div>
                )
              })}
            </div>
          )
        }

        if (pokemonList.errorMsg !== "") {
          return <p>{pokemonList.errorMsg}</p>
        }

        return <p>unable to get data</p>
      };

    return(
        <div>
            <div className={"search-wrapper"}>
              <p>Search by Name: </p>
              <input type="text" onChange={e => setSearch(e.target.value.toLowerCase())}/>
              <button onClick={() => props.history.push(`/pokemon/${search}`)} >Search</button>
            </div>
            {ShowData()}
            {!_.isEmpty(pokemonList.data) && (
              <ReactPaginate
                pageCount={Math.ceil(pokemonList.count / 15)}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                onPageChange={(data) => FetchData(data.selected + 1)}
                containerClassName={"pagination"}
              />
            )}
        </div>
    )
};

export default PokemonList;
