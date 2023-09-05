import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Detail = () =>{
    
    const {id} = useParams();
    const [driver, setDriver] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/drivers/${id}`).then(({data}) => {
            if (data.name) setDriver(data);
            else window.alert('No hay personaje con ese nombre')
        })
        return setDriver({});
    },[id]);

    return(
        <div>
            <Link to={`/Home`}> <button>Drivers</button> </Link>
            <h1>{driver.name && driver.name}</h1>
        </div>
    )
}

export default Detail;
