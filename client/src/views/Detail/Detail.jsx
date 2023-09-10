import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { viewDetail } from '../../redux/actions';
import './Detail.css'


const Detail = () =>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const driver = useSelector((state) => state.drivers);

    useEffect(() => {
        dispatch(viewDetail(id))
    },[dispatch, id]);

    return(
        <div className='all'>
            <Link to={'/Home'} className='link'> <button>Drivers</button> </Link>
            <div className='cardDet'>
            <img src={driver.image || 'https://i.pinimg.com/originals/37/68/44/3768447b2024222d9e90c203e96c9328.jpg'} />
            <div className='card__content'>
            <h1 className='card__title'>{driver.name + ' ' + driver.surname}</h1>
            <div className='card__description'>
            <h2>Equipos: {driver.teams}</h2>
            <h4>Nacionalidad: {driver.nationality}</h4>
            <h4>Fecha de nacimiento: {driver.dob}</h4>
            <br />
            <h5>{driver.description}</h5>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Detail;