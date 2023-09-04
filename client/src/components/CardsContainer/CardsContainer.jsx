import React, { useState } from 'react';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import './CardsContainer.css'

const CardsContainer = () => {
    const drivers = useSelector(state => state.drivers);

    const paginateUsers = (drivers, currentPage, maxDrivers) => {
        const indexOfLastUser = currentPage * maxDrivers;
        const indexOfFirstUser = indexOfLastUser - maxDrivers;
        return drivers.slice(indexOfFirstUser, indexOfLastUser);
    };

    const maxDrivers = 9; 
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const currentUsers = paginateUsers(drivers, currentPage, maxDrivers);

    return (
        <div className='cardsContainer'>
            {currentUsers.map(({ id, name, surname, image, dob, teams }) => {
                return (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        surname={surname}
                        image={image}
                        dob={dob}
                        teams={teams}
                    />
                );
            })}
            <Pagination drivers={drivers} maxDrivers={maxDrivers} onPageChange={onPageChange} />
        </div>
    );
}

export default CardsContainer;
