import './Landing.css'

const Landing = () =>{
    const handleClick = () => window.location.href = '../Home' 
    return(
        <div className="Landing">
                <button className='landingButton' onClick={handleClick}>Comenzar Carrera</button>
        </div> 
    )
}

export default Landing;