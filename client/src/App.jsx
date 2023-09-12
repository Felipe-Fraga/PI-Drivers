import { Create, Detail, Home, Landing, Error } from './views/index';
import {Route, Routes} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>        
      <Routes>
        <Route exact path="/" element={<Landing/>}/> 
        <Route path="/home" element={<Home/>}/> 
        <Route path="/detail/:id" element={<Detail/>}/> 
        <Route path="/create" element={<Create/>}/> 
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
