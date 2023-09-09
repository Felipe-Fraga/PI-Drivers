import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './CardsContainer.css'
import { Pagination } from './Pagination';

const CardsContainer = () => {
    const drivers = useSelector(state => state.drivers);
    const [page, setPage] = useState(1);
    const [xPage, setxPage] = useState(9);
    const maxDrivers = drivers.length / xPage; 
    
    if (!Array.isArray(drivers)) return null

    return (
        <div>
        <div>
            <Pagination page={page} setPage={setPage} maxDrivers={maxDrivers}/>
        </div>
        <div className='cardsContainer'>
            {drivers.slice((page-1)*xPage, (page-1)*xPage+xPage)
            .map(({ id, name, surname, image, dob, teams, Teams }) => {
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
        </div>
    );
}

export default CardsContainer;
