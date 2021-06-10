import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {GetType} from '../actions/pokemonActions';
import _ from 'lodash';


const Type = (props) => {
    const typeName = props.match.params.type;
    // console.log(typeName);
    const dispatch = useDispatch();
    const typeState = useSelector(state => state.Type);
    
    React.useEffect(() => {
        dispatch(GetType(typeName))
    }, [])

    const ShowData = (type) => {
        if (typeState.loading) {
            return <p>Loading...</p>
        }
        
        if(!_.isEmpty(typeState.data[typeName])) {
        const typeData = typeState.data[typeName];
        
        console.log(typeData);
        
        return (
            <div className="list-wrapper">
                {typeData.pokemon.map(el => {
                    return (
                    <div className="pokemon-item" id={typeName}>
                        <Link to={`/pokemon/${el.pokemon.name}`} className="type-list-item">{el.pokemon.name}</Link>
                    </div>
                    
                )})}
            </div>
        )
        
        }

        

        if (typeState.errorMsg !== "") {
            return<p>{typeState.errorMsg}</p>
        }
        return <p>TypeState Error 10-5-AB-9er</p>
    }

    return(
        <div className={"poke"}>
            <h1>{typeName} Pokemon</h1>
            {ShowData()}
        </div>
    )
}

export default Type;