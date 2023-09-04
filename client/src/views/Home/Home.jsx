import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { getUsers } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavBar from '../../components/NavBar/NavBar'

const Home = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsers())
    },[dispatch])

    return(
        <div>
            <NavBar />
            <CardsContainer />
        </div>
    )
}

export default Home;