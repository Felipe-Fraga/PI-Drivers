import SearchBar from "./SearchBar";
import Order from './Order'
import Origin from "./Origin";
import FilterByTeam from "./FilterByTeam";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="NavBar">
            <Link to ={'/Create'} className="link"><button className='create'>Create</button> </Link>
            <SearchBar />
            <Order />
            <Origin />
            <FilterByTeam />
        </div>
    );
};

export default NavBar;