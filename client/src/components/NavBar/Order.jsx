import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { sortDrivers } from "../../redux/actions";

const Order = ({onFilterChange}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setOrder("");
    setDirection("");
  }, []);

  const [order, setOrder] = useState("");
  const [direction, setDirection] = useState("");

  const handleSortChange = (e) => {
    const [newOrder, newDirection] = e.target.value.split(":");
    setOrder(newOrder);
    setDirection(newDirection);
    dispatch(sortDrivers(newOrder, newDirection));
    onFilterChange(); 
  };

  return (
    <div>
      <select onChange={handleSortChange} value={`${order}:${direction}`}>
        <option value="name:asc">Name (A-Z)</option>
        <option value="name:desc">Name (Z-A)</option>
        <option value="dob:asc">Age ( - to + )</option>
        <option value="dob:desc">Age ( + to - )</option>
      </select>
    </div>
  );
};

export default Order;
