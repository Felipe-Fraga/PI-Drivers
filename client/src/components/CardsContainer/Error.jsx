import './Error.css'
import { getDrivers } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const Error = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.error);


    const mostrarTodos = () => dispatch(getDrivers());

    return (
        <div class="error">
            <div class="error-content">
                <p class="error-para">{error}</p>
            <button onClick={mostrarTodos} >Show all</button>
            </div>
        </div>
    )
}

