export const order = (newOrder, orderBy, orderDirection, dispatch, sortUsers) => {
    if (newOrder === orderBy) {
        orderDirection = orderDirection === 'asc' ? 'desc' : 'asc';
    } else {
        orderDirection = 'asc'; 
    }
    dispatch(sortUsers(newOrder, orderDirection));
};



export const paginateUsers = (drivers, currentPage, maxDrivers) => {
    const indexOfLastUser = currentPage * maxDrivers;
    const indexOfFirstUser = indexOfLastUser - maxDrivers;
    return drivers.slice(indexOfFirstUser, indexOfLastUser);
};


