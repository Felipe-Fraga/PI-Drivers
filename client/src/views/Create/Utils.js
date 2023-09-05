import { createDriver } from '../../redux/actions';
import {
    validateName,
    validateSurname,
    validateNationality,
    validateImage,
    validateDob,
    validateDescription,
    validateTeams,
} from './Validation';

export function handleSubmit(event, driverData, setErrors, dispatch, setDriverData) {
    event.preventDefault();

    const errors = {
        name: validateName(driverData.name),
        surname: validateSurname(driverData.surname),
        nationality: validateNationality(driverData.nationality),
        image: validateImage(driverData.image),
        dob: validateDob(driverData.dob),
        description: validateDescription(driverData.description),
        teams: validateTeams(driverData.teams),
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
            teams: [],
        });
    }
}

export function handleFieldChange(event, driverData, setDriverData) {
    const { name, value } = event.target;
    setDriverData({ ...driverData, [name]: value });
}

export function handleImageChange(event, driverData, setDriverData) {
    const imageFile = event.target.files[0];
    setDriverData({ ...driverData, image: imageFile });
}

export function handleTeamsChange(event, driverData, setDriverData) {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setDriverData({ ...driverData, teams: selectedOptions });
}
