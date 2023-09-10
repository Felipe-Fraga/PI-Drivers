import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({id, name, surname, image, teams, Teams}) => {
    return(
        <div class="card">
            <Link to = {`/Detail/${id}`}>
                <img src={image} alt={`${name} ${surname}`} />
                <div class="card__content">
                    <p class="card__title">{name} {surname}</p>
                    <p class="card__description">{teams || Teams}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card