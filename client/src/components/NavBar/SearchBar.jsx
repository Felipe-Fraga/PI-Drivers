import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {searchUserByName} from '../../redux/actions';
import { getUsers } from "../../redux/actions";
import { Link } from 'react-router-dom'

const SearchBar = () => {
  const dispatch = useDispatch();

    const [nombre, setNombre] = useState("");

    const handleChange = (e) => {
      setNombre(e.target.value); 
    };

    const handleSearch = () => {
      dispatch(searchUserByName(nombre)); 
    };

    const mostrarTodos = () => {
      dispatch(getUsers());
    };

    return(
        <div className="SearchBar">
            <input type="text" onChange={handleChange} value={nombre} placeholder="Buscar conductor"/>
            <button type="button" onClick={handleSearch}>Buscar</button>
            <button onClick={mostrarTodos}>Mostrar Todos</button>
            <Link to ={'/Create'}> <button>Create</button> </Link>
        </div>
    )
}

export default SearchBar