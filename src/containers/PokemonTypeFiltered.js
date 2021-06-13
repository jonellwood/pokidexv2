import React, { useState }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from "lodash";
import { GetType } from '../actions/pokemonActions';
import {Link} from 'react-router-dom';
// import ReactPaginate from 'react-paginate';

const PokemonByTypeList = (props) => {
  const [search, setSearch]= useState("");
  const dispatch = useDispatch();
  const pokemonByTypeList = useSelector(state => state.Types);
  React.useEffect(() => {
    FetchData(1)
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetType(page))
  }
  console.log(pokemonByTypeList);
  const ShowData = () => {
    if (pokemonByTypeList.loading) {
      return <p>Loading...</p>
    }

    if (!_.isEmpty(pokemonByTypeList.data)) {
      return(
        <div className={"list-wrapper"}>
          {pokemonByTypeList.data.map(el => {
            return(
              <div className={"pokemon-item"}>
                <Link to={`/typeData/${el.name}`}><p>{el.name}</p></Link>
                <Link to={"/"}>Home</Link>
              </div>
            )
          })}
        </div>
      )
    }

    if (pokemonByTypeList.errorMsg !== "") {
      return <p>{pokemonByTypeList.errorMsg}</p>
    }
    return <p>Shitty error message here</p>
  };

  return(
    <div>
      <div className={"search-wrapper"}>
        <p>Search by Name: </p>
        <input type="text" onChange={e => setSearch(e.target.value.toLowerCase())}/>
        <button onClick={() => props.history.push(`/pokemon/${search}`)} >Search</button>
      </div>
      {ShowData()}
      {/* {!_.isEmpty(pokemonByTypeList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonByTypeList.count / 10)}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          onPageChange={(data) => FetchData(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )} */}
    </div>
  )
};

export default PokemonByTypeList;
