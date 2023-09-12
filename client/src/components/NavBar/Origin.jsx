import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByOrigin } from "../../redux/actions";

const Origin = () => {
    const dispatch = useDispatch();
    const [origin, setOrigin] = useState("");

    const handleSourceChange = (e) => {
        setOrigin(e.target.value);
        dispatch(filterByOrigin(e.target.value)); 
    };

    return (
        <div>
            <select onChange={handleSourceChange}>
                <option value="">All origins</option>
                <option value="database">DataBase</option>
                <option value="api">API</option>
            </select>
        </div>
    );
};

export default Origin;
