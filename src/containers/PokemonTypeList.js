import React, { useState }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from "lodash";
import { GetPokemonTypeList } from '../actions/pokemonActions';
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const PokemonTypeList = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonTypeList = useSelector(state => state.PokemonTypeList);
  React.useEffect(() => {
    FetchData(1)
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonTypeList(page))
  }
  // console.log(pokemonTypeList);
  const ShowData = () => {
    if (pokemonTypeList.loading) {
      return <p>Loading...</p>
    }
    if (!_.isEmpty(pokemonTypeList.data)) {
      return(
        <div className={"list-wrapper"}>
          {pokemonTypeList.data.map(el => {
            return(
              <div id={`${el.name}`} className={"pokemon-item"}>
                <p>{el.name}</p>
                <Link to={`/types/${el.name}`}>View List</Link>
              </div>
            )
          })}
        </div>
      )
    }

    if (pokemonTypeList.errorMsg !== "") {
      return <p>{pokemonTypeList.errorMsg}</p>
    }

    return <p>Unable to get damn data</p>
  };
  const lowerSearch = (e) => {
    e.toLowerCase();
  };

  return(
    <div>
      <div className={"search-wrapper"}>
        <p>Search by Name: </p>
        <input type="text" onChange={e => setSearch(e.target.value)}/>
        <button onClick={() => props.history.push(`/pokemon/${lowerSearch}`)} >Search</button>
      </div>
      {ShowData()}
      {/* {!_.isEmpty(pokemonTypeList.data) && (
        <ReactPaginate
        pageCount={Math.ceil(pokemonTypeList.count / 10)}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        onPageChange={(data) => FetchData(data.selected + 1)}
        containerClassName={"pagination"}
        />
      )} */}
    </div>
  )
};

export default PokemonTypeList;
