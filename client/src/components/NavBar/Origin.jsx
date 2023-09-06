import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCharacterSource } from "../../redux/actions";

const Origin = () => {
    const dispatch = useDispatch();
    const [selectedSource, setSelectedSource] = useState("");

    const handleSourceChange = (event) => {
        const source = event.target.value;
        setSelectedSource(source);
        dispatch(setCharacterSource(source)); 
    };

    return (
        <div>
            <select id="sourceSelect" value={selectedSource} onChange={handleSourceChange}>
                <option value="">Todos</option>
                <option value="database">Base de Datos</option>
                <option value="api">API</option>
            </select>
        </div>
    );
};

export default Origin;
