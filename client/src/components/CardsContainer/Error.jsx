import './Error.css'
import { getDrivers } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export const Error = () => {
    const dispatch = useDispatch();

    const mostrarTodos = () => dispatch(getDrivers());

    return (
        <div class="error">
            <div class="error-content">
                <p class="error-para">Todavía no hay corredor</p>
            <button onClick={mostrarTodos} >Show all</button>
            </div>
        </div>
    )
}

