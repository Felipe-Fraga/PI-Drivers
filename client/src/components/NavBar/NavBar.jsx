import SearchBar from "./SearchBar";
import Order from './Order'
import Origin from "./Origin";
import FilterByTeam from "./FilterByTeam";

const NavBar = () => {
    return (
        <div>
            <SearchBar />
            <Order />
            <Origin />
            <FilterByTeam />
        </div>
    );
};

export default NavBar;