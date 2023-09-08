import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleSubmit } from './Utils';
import {Link} from 'react-router-dom'

const Create = () => {
    const dispatch = useDispatch();
    const teams = useSelector((state) => state.teams);

    const [selectTeams, setSelectedTeams] = useState([])
    const [driverData, setDriverData] = useState({
        name: '',
        surname: '',
        nationality: '',
        image: null,
        dob: '',
        description: '',
        teams: []
    });

    const [errors, setErrors] = useState({
        name: '',
        surname: '',
        nationality: '',
        image: '',
        dob: '',
        description: ''
    });

    const handleSelectChange = (e) => {
        setSelectedTeams((x) =>  [...x, e.target.value]);
        setDriverData((x) => ({...x, teams: [...x.teams, e.target.value]}))
    }

    const handleChange = (event)=> {
        setDriverData({ ...driverData, [event.target.name]: event.target.value });
    }


    return (
        <div>
            <Link to={'/Home'}> <button>Home</button> </Link>
            <h1>Crear Conductor</h1>
            <form onSubmit={(event) => handleSubmit(event, driverData, setErrors, dispatch, setDriverData)}>
                <label>Nombre:</label>
                <input name="name" value={driverData.name} onChange={handleChange} />
                {errors.name && <div className="error">{errors.name}</div>}

                <label>Apellido:</label>
                <input  name="surname" value={driverData.surname} onChange={handleChange} />
                {errors.surname && <div className="error">{errors.surname}</div>}

                <label>Nacionalidad:</label>
                <input name="nationality" value={driverData.nationality} onChange={handleChange} />
                {errors.nationality && <div className="error">{errors.nationality}</div>}

                <label>Imagen:</label>
                <input name="image" type="url"  onChange={handleChange} />

                <label>Fecha de Nacimiento:</label>
                <input name="dob" type="date" value={driverData.dob} onChange={handleChange} />
                {errors.dob && <div className="error">{errors.dob}</div>}

                <label>Descripción:</label>
                <textarea name="description" value={driverData.description} onChange={handleChange}></textarea>
                {errors.description && <div className="error">{errors.description}</div>}

                <label>Equipos::</label>
                <select  multiple={true} value={driverData.teams} onChange={handleSelectChange}>
                    {teams.map((team) => (
                        <option key={team.id} value={team.nombre}>
                            {team.nombre}
                        </option>
                    ))}
                </select>
                {errors.teams && <div className="error">{errors.teams}</div>}

                <button type="submit">Crear Driver</button>
            </form>
        </div>
    );
};


export default Create;
