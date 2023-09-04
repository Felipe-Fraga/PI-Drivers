import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortUsers, getUsers } from "../../redux/actions";

const Buttons = () => {
  const dispatch = useDispatch();

  const [orderBy, setOrderBy] = useState("name");
  const [orderDirection, setOrderDirection] = useState("asc");

  const handleSortClick = (newOrder) => {
    const newOrderDirection =
      newOrder === orderBy ? (orderDirection === "asc" ? "desc" : "asc") : "asc";
    setOrderBy(newOrder);
    setOrderDirection(newOrderDirection);
    dispatch(sortUsers(newOrder, newOrderDirection));
  };

  return (
    <div>
      <button onClick={() => handleSortClick("name")}>Ordenar por Nombre</button>
      <button onClick={() => handleSortClick("birthdate")}>Ordenar por Fecha de Nacimiento</button>
    </div>
  );
};

export default Buttons;
