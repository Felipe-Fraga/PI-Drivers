import { createDriver } from '../../redux/actions';

export function handleSubmit(event, driverData, setErrors, dispatch, setDriverData, drivers) {
    event.preventDefault();
    !driverData.image ? driverData.image = '' : undefined;

    const errors = {
        name: (driverData.name === '' || !/^[A-Za-zÁÉÍÓÚáéíóúüÜ\s]+$/.test(driverData.name)) ? 'Nombre invalido.' : undefined,
        surname: (driverData.surname === '' || !/^[A-Za-zÁÉÍÓÚáéíóúüÜ\s]+$/.test(driverData.surname)) ? 'Apellido invalido.' : undefined,
        nationality: (driverData.nationality === '' || !/^[A-Za-zÁÉÍÓÚáéíóúüÜ\s]+$/.test(driverData.nationality)) ? 'Nacionalidad invalida.' : undefined,
        dob: driverData.dob === '' ? 'La fecha de nacimiento del conductor es obligatoria.' : undefined,
        description: driverData.description === '' ? 'La descripción del conductor es obligatoria.' : undefined,
        teams: driverData.teams.length === 0 ? 'Selecciona al menos una escudería.' : undefined,
    };

    setErrors(errors);

    const noErrors = Object.values(errors).every((error) => !error)     //true si no hay errores

    const corredorYaExiste = (data) => 
            drivers.some(function(driver) {
            return driver.name === data.name && driver.surname === data.surname && driver.dob === data.dob;
        })

    if (corredorYaExiste(driverData)) {
        window.alert('Ese corredor ya existe');
    } else if (noErrors) {
        dispatch(createDriver(driverData));
        setDriverData({
            name: '',
            surname: '',
            nationality: '',
            image: '',
            dob: '',
            description: '',
            teams: driverData.teams,
        });
        window.alert('Driver creado con éxito');
    }
}