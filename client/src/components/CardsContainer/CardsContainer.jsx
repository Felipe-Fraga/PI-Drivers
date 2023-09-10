import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './CardsContainer.css'
import { Pagination } from './Pagination';
import { Error } from './Error'

const CardsContainer = () => {
    const drivers = useSelector(state => state.drivers);
    const [page, setPage] = useState(1);
    const [xPage, setxPage] = useState(9);
    const maxDrivers = drivers.length / xPage; 
    const [hasSearchedWithoutResults, setHasSearchedWithoutResults] = useState(false);


    const handleSearch = (searchResults) => {
        const noResults = searchResults.length === 0;
        setHasSearchedWithoutResults(noResults);
    };

    if (!Array.isArray(drivers)) return null

    return (
        <div>
        <div>
            {drivers.length !== 0 ? <Pagination page={page} setPage={setPage} maxDrivers={maxDrivers}/> : null }
        </div>
        <div className='cardsContainer'>
            {drivers.length === 0 ? <Error/> :
            drivers.slice((page-1)*xPage, (page-1)*xPage+xPage)
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
