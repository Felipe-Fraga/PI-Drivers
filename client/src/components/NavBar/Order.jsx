import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortUsers } from "../../redux/actions";

const Order = () => {
  const dispatch = useDispatch();

  const [order, setOrder] = useState("");
  const [direction, setDirection] = useState("");

  const handleSortChange = (event) => {
    const { value } = event.target;
    const [newOrder, newDirection] = value.split(":");
    setOrder(newOrder);
    setDirection(newDirection);
    dispatch(sortUsers(newOrder, newDirection));
  };

  return (
    <div>
      <select onChange={handleSortChange} value={`${order}:${direction}`}>
        <option value="name:asc">Nombre (A-Z)</option>
        <option value="name:desc">Nombre (Z-A)</option>
        <option value="birthdate:asc">Edades Ascendentes</option>
        <option value="birthdate:desc">Edades Descendentes</option>
      </select>
    </div>
  );
};

export default Order;
