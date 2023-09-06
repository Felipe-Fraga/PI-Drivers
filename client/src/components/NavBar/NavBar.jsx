import SearchBar from "./SearchBar";
import Order from './Order'
import FilterByTeam from "./Filter";
import Origin from "./Origin";

const NavBar = () => {
    return (
        <div className="navBar">
            <SearchBar />
            <Order />
            <FilterByTeam />
            <Origin />
        </div>
    );
};

export default NavBar;