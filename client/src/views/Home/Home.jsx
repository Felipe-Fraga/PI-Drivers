import CardsContainer from "../../components/CardsContainer/CardsContainer";
import NavBar from '../../components/NavBar/NavBar'
import { getDrivers } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTeams } from "../../redux/actions";
import './Home.css'

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDrivers());
    }, [dispatch]);
                                //para que no se bloqueen entre sí en tiempos de ejecución
    useEffect(() => {
        dispatch(getTeams());
    }, [dispatch]);

    return (
        <div className="home">
            <NavBar />
            <CardsContainer />
        </div>
    );
}

export default Home;
