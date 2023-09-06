import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTeams } from '../../redux/actions';
import { handleSubmit, handleInputChange } from './Utils';

const Create = () => {
    const dispatch = useDispatch();
    const opcionesEscuderias = useSelector((state) => state.teams);

    useEffect(() => {
        if (opcionesEscuderias.length === 0) {
            dispatch(getTeams());
        }
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

    const handleSelectChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        handleInputChange(event, driverData, setDriverData);
        setDriverData({ ...driverData, teams: selectedOptions });
    };

    return (
        <div>
            <h1>Crear Conductor</h1>
            <form  encType="multipart/form-data" onSubmit={(event) => handleSubmit(event, driverData, setErrors, dispatch, setDriverData)}>
                <label>Nombre:</label>
                <input type="text" id="name" name="name" value={driverData.name} onChange={(event) => handleInputChange(event, driverData, setDriverData)} />
                {errors.name && <div className="error">{errors.name}</div>}

                <label>Apellido:</label>
                <input type="text" id="surname" name="surname" value={driverData.surname} onChange={(event) => handleInputChange(event, driverData, setDriverData)} />
                {errors.surname && <div className="error">{errors.surname}</div>}

                <label>Nacionalidad:</label>
                <input type="text" id="nationality" name="nationality" value={driverData.nationality} onChange={(event) => handleInputChange(event, driverData, setDriverData)} />
                {errors.nationality && <div className="error">{errors.nationality}</div>}

                <label>Imagen:</label>
                <input type="file" id="image" name="image" accept="image/*" onChange={(event) => handleInputChange(event, driverData, setDriverData)} />

                <label>Fecha de Nacimiento:</label>
                <input type="date" id="dob" name="dob" value={driverData.dob} onChange={(event) => handleInputChange(event, driverData, setDriverData)} />

                <label>Descripción:</label>
                <textarea id="description" name="description" value={driverData.description} onChange={(event) => handleInputChange(event, driverData, setDriverData)}></textarea>

                <label>Escuderías:</label>
                <select id="teams" multiple={true} value={driverData.teams} onChange={handleSelectChange}>
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
