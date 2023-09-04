import React, { useState } from 'react';

const Pagination = ({ drivers, maxDrivers, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        onPageChange(pageNumber);
    };

    return (
        <div className="pagination">
            {Array.from({ length: Math.ceil(drivers.length / maxDrivers) }).map((_, index) => (
                <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
            ))}
        </div>
    );
};

export default Pagination;
