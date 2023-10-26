import React from 'react'
import { Route, Routes,Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import TourDetails from '../pages/TourDetails';
import Tours from '../pages/Tours';
import ThankYou from '../pages/ThankYou';
import Gallery from '../pages/Gallery';
import About from '../pages/About';
const Router = () => {
  return (
      <Routes>
        <Route path='/' element={<Navigate to='/home' />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/tours/search' element={<SearchResultList />}/>
        <Route path='/tours/:id' element={<TourDetails />}/>
        <Route path='/thank-you' element={<ThankYou/>} /> 
        <Route path='/tours' element={<Tours />}/> 
      </Routes>
  )
}

export default Router;