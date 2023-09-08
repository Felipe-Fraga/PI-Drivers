import { createDriver } from '../../redux/actions';

export function handleSubmit(event, driverData, setErrors, dispatch, setDriverData) {
    event.preventDefault();

    !driverData.image ? driverData.image = '' : undefined;

    const errors = {
        name: driverData.name === '' ? 'El nombre del conductor es obligatorio.' : undefined,
        surname: driverData.surname === '' ? 'El apellido del conductor es obligatorio.' : undefined,
        nationality: driverData.nationality === '' ? 'La nacionalidad del conductor es obligatoria.' : undefined,
        dob: driverData.dob === '' ? 'La fecha de nacimiento del conductor es obligatoria.' : undefined,
        description: driverData.description === '' ? 'La descripción del conductor es obligatoria.' : undefined,
        teams: driverData.teams.length === 0 ? 'Selecciona al menos una escudería.' : undefined,
    };

    setErrors(errors);

    const noErrors = Object.values(errors).every((error) => !error);

    if (noErrors) {
        dispatch(createDriver(driverData));
        setDriverData({
            name: '',
            surname: '',
            nationality: '',
            image: null,
            dob: '',
            description: '',
            teams: driverData.teams,
        });
    }
}