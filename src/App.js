import React from 'react';
import './App.css';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import PokemonList from './containers/PokemonList';
import Pokemon from './containers/Pokemon';
import PokemonTypeList from './containers/PokemonTypeList';
import PokemonTypeFiltered from './containers/PokemonTypeFiltered';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/types"}>Types</NavLink>
      </nav>
        <Switch>
          <Route path={"/"} exact component={PokemonList} />
          <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
          <Route path={"/types/"} exact component={PokemonTypeList} />
          <Route path={"/types/:type"} exact component={PokemonTypeFiltered} />
          <Redirect to={"/"}/>
        </Switch>
    </div>
  );
}

export default App;
