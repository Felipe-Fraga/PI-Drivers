import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { viewDetail } from '../../redux/actions';

const Detail = () =>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const driver = useSelector((state) => state.drivers);

    useEffect(() => {
        dispatch(viewDetail(id))
    },[dispatch, id]);

    return(
        <div>
            <Link to={'/Home'}> <button>Drivers</button> </Link>
            <h1>{driver.name + ' ' + driver.surname}</h1>
            <h2>{driver.teams}</h2>
            <img src={driver.image} />
            <h4>{driver.nationality}</h4>
            <h4>{driver.dob}</h4>
            <h6>{driver.description}</h6>
        </div>
    )
}

export default Detail;