import { useState } from 'react'
import './CardsContainer.css'

export const Pagination = ({page, setPage, maxDrivers}) => {
    const [input, setInput] = useState(1)

    const next = () => {
        if (page < maxDrivers) {
            setInput(input+1);
            setPage(page+1);
        }
    }
    
    const prev = () => {
        if (page !== 1) {
        setInput(input-1);
        setPage(page-1);
        }
    }

    const first = () =>  setPage(1);
    

    const last = () => 
        setPage(Math.ceil(maxDrivers));
    

    return(
        <div className='Pagination'>
            <button onClick={first}>First</button>
            <button onClick={prev}>Prev</button>
            <span>{page} / {Math.ceil(maxDrivers)}</span>
            <button onClick={next}>Next</button>
            <button onClick={last}>Last</button>
        </div>
    )
}