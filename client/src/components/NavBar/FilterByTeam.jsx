import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByTeam } from "../../redux/actions";

const FilterByTeam = ({onFilterChange}) => {
    const dispatch = useDispatch();
    const [team, setTeam] = useState(""); 
    const teams = useSelector((state) => state.teams); 

    const handleTeamChange = (e) => {
        setTeam(e.target.value); 
        dispatch(filterByTeam(e.target.value));
        onFilterChange();
    };

    return (
        <div>
            <select onChange={handleTeamChange}>
                <option value="">All teams</option>
                {teams.map((team) => (
                    <option key={team.id}> {team.nombre} </option>)
                )}
            </select>
        </div>
    );
};

export default FilterByTeam;
