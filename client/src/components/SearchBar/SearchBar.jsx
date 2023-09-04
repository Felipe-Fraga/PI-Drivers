import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {searchUserByName} from '../../redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();

    const [nombre, setNombre] = useState("");

    const handleChange = (e) => {
      setNombre(e.target.value); 
    };

    const handleSearch = () => {
      dispatch(searchUserByName(nombre)); 
    };

    return(
        <div className="SearchBar">
            <input type="text" onChange={handleChange} value={nombre} placeholder="Buscar conductor"/>
            <button type="button" onClick={handleSearch}>Buscar</button>
        </div>
    )
}

export default SearchBar