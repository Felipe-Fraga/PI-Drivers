import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTeams } from '../../redux/actions';
import { handleSubmit, handleFieldChange, handleImageChange, handleTeamsChange } from './Utils';

const Create = () => {
    const dispatch = useDispatch();
    const opcionesEscuderias = useSelector((state) => state.teams);
    useEffect(() => {
        opcionesEscuderias.length === 0 && dispatch(getTeams());
    }, [opcionesEscuderias, dispatch]);

    const [driverData, setDriverData] = useState({
        name: '',
        surname: '',
        nationality: '',
        image: null,
        dob: '',
        description: '',
        teams: [],
    });

    const [errors, setErrors] = useState({
        name: '',
        surname: '',
        nationality: '',
        image: '',
        dob: '',
        description: '',
        teams: '',
    });

    return (
        <div>
            <h1>Crear Conductor</h1>
            <form onSubmit={(event) => handleSubmit(event, driverData, setErrors, dispatch)}>
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={driverData.name}
                    onChange={(event) => handleFieldChange(event, driverData, setDriverData)}
                    required
                />
                {errors.name && <div className="error">{errors.name}</div>}

                <label htmlFor="surname">Apellido:</label>
                <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={driverData.surname}
                    onChange={(event) => handleFieldChange(event, driverData, setDriverData)}
                    required
                />
                {errors.surname && <div className="error">{errors.surname}</div>}

                <label htmlFor="nationality">Nacionalidad:</label>
                <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={driverData.nationality}
                    onChange={(event) => handleFieldChange(event, driverData, setDriverData)}
                    required
                />
                {errors.nationality && <div className="error">{errors.nationality}</div>}

                <label htmlFor="image">Imagen:</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={(event) => handleImageChange(event, driverData, setDriverData)}
                    required
                />

                <label htmlFor="dob">Fecha de Nacimiento:</label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={driverData.dob}
                    onChange={(event) => handleFieldChange(event, driverData, setDriverData)}
                    required
                />

                <label htmlFor="description">Descripción:</label>
                <textarea
                    id="description"
                    name="description"
                    value={driverData.description}
                    onChange={(event) => handleFieldChange(event, driverData, setDriverData)}
                    required
                ></textarea>

                <label htmlFor="teams">Escuderías:</label>
                <select
                    id="teams"
                    multiple={true}
                    value={driverData.teams}
                    onChange={(event) => handleTeamsChange(event, driverData, setDriverData)}
                    required
                >
                    {opcionesEscuderias.map((escuderia) => (
                        <option key={escuderia.id} value={escuderia.nombre}>
                            {escuderia.nombre}
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
