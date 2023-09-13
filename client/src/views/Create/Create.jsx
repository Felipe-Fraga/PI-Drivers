import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleSubmit } from './Utils';
import { Link } from 'react-router-dom'
import './Create.css'

const Create = () => {
    const dispatch = useDispatch();
    const teams = useSelector((state) => state.teams);
    const drivers = useSelector((state) => state.drivers)


    const [selectTeams, setSelectedTeams] = useState([]);
    const [driverData, setDriverData] = useState({
        name: '',
        surname: '',
        nationality: '',
        image: '',
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
        setSelectedTeams((x) => [...x, e.target.value]);
        setDriverData((x) => ({ ...x, teams: [...x.teams, e.target.value] }))
    }

    const handleChange = (event) => {
        setDriverData({ ...driverData, [event.target.name]: event.target.value });
    }


    return (
        <div className='all'>
            <Link to={'/Home'} className='link'>
                <button>Home</button>
            </Link>

            <form className="form" onSubmit={(event) => handleSubmit(event, driverData, setErrors, dispatch, setDriverData, drivers)}>
                <p className="title">Crear nuevo corredor</p>
                <p className="message">En caso de no cargar imagen, se cargará una por defecto</p>
                <div className="flex">
                    <label>
                        <span>Nombre</span>
                        <input className="input" name="name" value={driverData.name} onChange={handleChange} />
                    </label>
                    {errors.name && <div className="errorForm">{errors.name}</div>}

                    <label>
                        <span>Apellido</span>
                        <input className="input" name="surname" value={driverData.surname} onChange={handleChange} />
                    </label>
                    {errors.surname && <div className="errorForm">{errors.surname}</div>}
                </div>

                <label>
                    <span>Nacionalidad</span>
                    <input className="input" name="nationality" value={driverData.nationality} onChange={handleChange} />
                </label>
                {errors.nationality && <div className="errorForm">{errors.nationality}</div>}

                <label>
                    <span>Imagen</span>
                    <input className="input" name="image" type="url" onChange={handleChange} />
                </label>

                <label>
                    <span>Fecha de Nacimiento:</span>
                    <input className="input" name="dob" type="date" value={driverData.dob} onChange={handleChange} />
                </label>
                {errors.dob && <div className="errorForm">{errors.dob}</div>}

                <label>
                    <span>Descripción</span>
                    <textarea className='input' name="description" value={driverData.description} onChange={handleChange}></textarea>
                </label>
                {errors.description && <div className="errorForm">{errors.description}</div>}


                <label>Equipos:</label>
                <select multiple={true} value={driverData.teams} onChange={handleSelectChange}>
                    {teams.map((team) => (
                        <option key={team.id} value={team.nombre}>
                            {team.nombre}
                        </option>
                    ))}
                </select>
                {errors.teams && <div className="errorForm">{errors.teams}</div>}


                <button className="submit">Crear</button>
            </form>
        </div>
    );
};

export default Create;
