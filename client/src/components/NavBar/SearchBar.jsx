import { searchDriverByName } from '../../redux/actions';
import { useDispatch } from "react-redux";
import { useState } from "react";
import './SearchBar.css'

const SearchBar = ({onFilterChange}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

    const handleChange = (e) => {
      setName(e.target.value); 
      dispatch(searchDriverByName(e.target.value));
      onFilterChange(); 
    };
    
    return(
        <div className='inputbox'>
            <input onChange={handleChange} value={name} placeholder="Search driver"/>
        </div>
    )
}

export default SearchBar