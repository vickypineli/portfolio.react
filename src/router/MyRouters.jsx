import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Porfolio from '../components/Portolio'
import Services from '../components/Services'
import Curriculum from '../components/Curriculum'
import Contact from '../components/Contact'

const MyRouters = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/portafolio' element={<Porfolio/>}/>
                <Route path='/servicios' element={<Services/>}/>
                <Route path='/curriculum' element={<Curriculum/>}/>
                <Route path='/contacto' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default MyRouters
