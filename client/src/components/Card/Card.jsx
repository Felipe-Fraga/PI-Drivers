import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({id, name, surname, image, dob, teams}) => {
    return(
        <div className='Card'>
            <Link to = {`/Detail/${id}`}>
                <h1>{name} {surname}</h1>
                <img src={image} alt={`${name} ${surname}`} />
                <p>{teams}</p>       
            </Link>         
        </div>
    )
}

export default Card