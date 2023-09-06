// FilterByTeam.js

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByTeam, getTeams } from "../../redux/actions";

const FilterByTeam = () => {
    const dispatch = useDispatch();
    const [selectedTeam, setSelectedTeam] = useState(""); 

    useEffect(() => {
        dispatch(getTeams());
    }, [dispatch]);

    const drivers = useSelector((state) => state.drivers); 
    const teams = useSelector((state) => state.teams); 
    const filteredDrivers = useSelector((state) => state.filteredDrivers); 

    const handleTeamChange = (event) => {
        const selectedTeam = event.target.value;
        setSelectedTeam(selectedTeam); 
        dispatch(filterByTeam(selectedTeam));
    };

    return (
        <div>
            <select value={selectedTeam} onChange={handleTeamChange}>
                <option value="">Todos los equipos</option>
                {teams.map((team) => (
                    <option key={team.id} value={team.nombre}>
                        {team.nombre}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterByTeam;
