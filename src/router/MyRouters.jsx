import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from '../components/Home'
import Porfolio from '../components/Portolio'
import Services from '../components/Services'
import Curriculum from '../components/Curriculum'
import Contact from '../components/Contact'
import HeaderNav from '../components/layout/HeaderNav'
import Footer from '../components/layout/Footer'
import Proyecto from '../components/Proyecto'

const MyRouters = () => {
  return (
    <div>
        <BrowserRouter>
        <HeaderNav/>
        <section className="content">
            <Routes>
                <Route path='/' element={<Navigate to ='/home'/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/portafolio' element={<Porfolio/>}/>
                <Route path='/servicios' element={<Services/>}/>
                <Route path='/curriculum' element={<Curriculum/>}/>
                <Route path='/contacto' element={<Contact/>}/>
                <Route path='/proyecto/:id' element={<Proyecto/>}/>
                <Route path='*' element={
                <div className='error'>
                    <h1 className='heading'>Error 404</h1>
                </div>
                }/>
            </Routes>
        </section>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default MyRouters
