import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import './CardsContainer.css'

const CardsContainer = () => {
    const drivers = useSelector(state => state.drivers);

    return (
        <div className='cardsContainer'>
            {drivers.map(({ id, name, surname, image, dob, teams, Teams }) => {
                return (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        surname={surname}
                        image={image || 'https://i.pinimg.com/originals/37/68/44/3768447b2024222d9e90c203e96c9328.jpg'}
                        dob={dob}
                        teams={teams || Teams}
                    />
                );
            })}
        </div>
    );
}

export default CardsContainer;
