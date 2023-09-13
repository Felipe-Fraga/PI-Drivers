import CardsContainer from "../../components/CardsContainer/CardsContainer";
import NavBar from '../../components/NavBar/NavBar'
import { getDrivers } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTeams } from "../../redux/actions";
import './Home.css'
import { useState } from "react";

const Home = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const handleFilterChange = () => setPage(1);
    
    useEffect(() => {
        dispatch(getDrivers());
    }, [dispatch]);
                                //para que no se bloqueen entre sí en tiempos de ejecución
    useEffect(() => {
        dispatch(getTeams());
    }, [dispatch]);

    return (
        <div className="home">
            <NavBar onFilterChange={handleFilterChange}/>
            <CardsContainer page={page} setPage={setPage}/>
        </div>
    );
}

export default Home;
