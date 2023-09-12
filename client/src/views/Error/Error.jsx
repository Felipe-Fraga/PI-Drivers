import '../Landing/Landing.css'
import { Link } from 'react-router-dom';

const Error = () => {
    return(
        <div className='Landing'>
                <Link to={'/Home'} className='link'><button className='landingButton'>Volver al Home</button></Link>
        </div>
    )
};

export default Error;