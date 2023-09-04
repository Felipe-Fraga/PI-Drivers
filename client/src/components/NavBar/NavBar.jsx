import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import { sortUsers, getUsers } from "../../redux/actions";
import { order } from "../Filtros/Filtros";

const NavBar = () => {
    const dispatch = useDispatch();

    const [orderBy, setOrderBy] = useState("name");
    const [orderDirection, setOrderDirection] = useState("asc");

    const handleSortClick = (newOrder) => {
        order(newOrder, orderBy, orderDirection, dispatch, sortUsers);
        setOrderBy(newOrder);
        setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    };


    const mostrarTodos = () => {
        dispatch(getUsers());
        setOrderBy("name");
        setOrderDirection("asc");
    };

    return (
        <div className="navBar">
            <SearchBar />
            <button onClick={() => handleSortClick("name")}>
                Ordenar por Nombre
            </button>
            <button onClick={() => handleSortClick("birthdate")}>
                Ordenar por Fecha de Nacimiento
            </button>
            <button onClick={mostrarTodos}>Mostrar Todos</button>
        </div>
    );
};

export default NavBar;
