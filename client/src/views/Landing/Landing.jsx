import './Landing.css'
import { Link } from 'react-router-dom'

const Landing = () => {
    return(
        <div className="Landing">
                <Link to={'/Home'}><button className='landingButton'>Comenzar</button></Link>
        </div> 
    )
}

export default Landing;