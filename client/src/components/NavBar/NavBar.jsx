import SearchBar from "./SearchBar";
import Order from './Order'
import Origin from "./Origin";
import FilterByTeam from "./FilterByTeam";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = ({onFilterChange}) => {
    return (
        <div className="NavBar">
            <Link to ={'/Create'} className="link"><button className='create'>Create</button> </Link>
            <SearchBar  onFilterChange={onFilterChange}/>
            <Order onFilterChange={onFilterChange}/>
            <Origin onFilterChange={onFilterChange}/>
            <FilterByTeam onFilterChange={onFilterChange} />
        </div>
    );
};

export default NavBar;